import { AssignMember } from '@/_services/queries/useAssignMemberList'
import { EntireMember } from '@/_services/queries/useEntireMemberList'
import { ProjectDetailReturn } from '@/_services/queries/useProjectDetail'

const AssignData: AssignMember[] = [
  {
    id: 1,
    name: '장호정',
    student_num: '201812379',
    created_at: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    name: '강태원',
    student_num: '201812321',
    created_at: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    name: '박준영',
    student_num: '201912379',
    created_at: new Date().toLocaleDateString(),
  },
]

const EntireData: EntireMember = {
  recent_count: 3,
  total_count: 3,
  results: [
    {
      id: 1,
      name: '장호정',
      student_num: '201812379',
      created_at: new Date().toLocaleDateString(),
    },
    {
      id: 2,
      name: '강태원',
      student_num: '201812321',
      created_at: new Date().toLocaleDateString(),
    },
    {
      id: 3,
      name: '박준영',
      student_num: '201912379',
      created_at: new Date().toLocaleDateString(),
    },
  ],
}

const ProfileData = {
  profile: {
    name: '강태원',
    student_num: '201811318',
    id: 2,
    image: 'https://avatars.githubusercontent.com/u/71972587?v=4',
    is_approved: false,
    is_staff: false,
    position: '백엔드',
    explain: '열심히 하겠습니다!',
  },
  urls: [
    {
      url: 'https://velog.io/@taegong_s',
    },
    {
      url: 'www.github.com/fnzksxl',
    },
  ],
  tech: [
    {
      name: 'FastAPI',
    },
    {
      name: 'Django',
    },
    {
      name: 'MySQL',
    },
  ],
  is_owner: true,
}

const ProjectDetailData: ProjectDetailReturn = {
  team: {
    id: 4,
    leader_id: 2,
    name: '고양이를 위한 SNS, 왓냥',
    explain:
      '#### 이번에 새로운 프로젝트를 진행하고 있습니다!\nFastAPI를 사용하다가 장고도 한 번 써보고 싶은 마음에 무작정 돌입하게 됐는데, 건드는게 생각보다 쉽지 않아 여기저기 공부하면서 하고 있네요.. 장고가 처음이다보니 부족한 지식으로 잘못 기술되거나 보셨을 때 개선의 여지가 있다면 코멘트 부탁드리겠습니다! (__) \n\n이번 프로젝트에서 적용한 인증/인가 방식을 한 번 소개해볼까 합니다.\n글에서는 단순히 로직만 소개하는 것이 아니라 나름대로 구현할 때 살펴봤던 점도 함께 기술해보겠습니다.\n(별로 대단하지는 않고, 조잡하다고 생각합니다만..)\n\n## 흐름도\n\n![](https://velog.velcdn.com/images/taegong_s/post/f1927c1c-ddf5-4abb-824a-a7b3b5576b71/image.png)\n\n전체적인 흐름도입니다. 위에서는 FrontEnd만 표기되어 있지만, 사실 App과 통신할 때 Authorization 헤더를 사용하고 웹에서 프론트와 통신할 때는 쿠키를 사용했습니다. 글 읽으시다가 참고하기 좋으시라고 미리 올려두겠습니다.\n\n> 이번에 앱과 웹 동시에 통신하는 백엔드를 처음 개발해보는데 이게 통상적인 방법인지는 모르겠습니다만 커스텀 헤더를 추가해서 앱에서 온 요청인지 웹에서 온 요청인지 구분하고 있습니다. (api 따로 추가 X)\n\n## 커스텀 미들웨어\nApp에서 통신할 때는 굳이 쿠키를 이용하지 않고 JWT를 주고 받는 방식,\nWeb에서 통신할 때는 쿠키에 JWT를 넣어 주고 받는 방식을 구현하고자 했는데요.\n이를 구현하기 위해서 미들웨어를 따로 추가해줬습니다.\n\n```python\nfrom django.utils.deprecation import MiddlewareMixin\nfrom rest_framework import status\n\n\nclass AttachJWTFromHeaderToCookieMiddleware(MiddlewareMixin):\n    def __init__(self, get_response):\n        super().__init__(get_response)\n        self.API = ["github/login", "callback/github"]\n        self.REFRESH = "token/refresh"\n\n    def process_response(self, request, response):\n        path = request.path_info\n        is_valid = any(api in path for api in self.API)\n        is_refresh = True if self.REFRESH in path else False\n        if (\n            is_valid\n            or is_refresh\n            and (response.status_code == status.HTTP_200_OK or response.status_code == status.HTTP_201_CREATED)\n        ):\n            if request.META.get("HTTP_X_FROM", None) == "web":\n                response.set_cookie("access", response.headers.get("access", None), httponly=True)\n                if is_valid:\n                    del response.headers["access"]\n\n                response.content = response.render().rendered_content\n\n        return response\n\n\nclass AttachJWTFromCookieToHeaderMiddleware(MiddlewareMixin):\n    def __init__(self, get_response):\n        super().__init__(get_response)\n        self.NOT_API = ["github/login", "callback/github"]\n\n    def process_request(self, request):\n        path = request.path_info\n        is_valid = any(api in path for api in self.NOT_API)\n\n        if not is_valid:\n            if request.META.get("HTTP_X_FROM", None) == "web":\n                request.META["HTTP_AUTHORIZATION"] = f"Bearer {request.COOKIES.get(\'access\', None)}"\n\n```\n\n#### AttachJWTFromHeaderToCookieMiddleware\n\n말 그대로 헤더에서 쿠키로 JWT를 붙여주는 미들웨어입니다.\n서버에서 클라이언트 측으로 JWT를 보낼 때는 현재 회원가입/로그인, 토큰 리프레싱 API 밖에 없기 때문에 요청 Path에 위 태스크의 API 주소가 들어있다면 실행되도록 커스텀했습니다.\n\n웹에서 온 요청일 때만 리스폰스의 헤더에서 쿠키로 JWT를 옮겨줍니다.\n\n#### AttachJWTFromCookieToHeaderMiddleware\n\n위의 미들웨어와 정반대의 일을 하는 미들웨어입니다.\n클라이언트 쪽에서 JWT가 들어오는 요청은 회원가입/로그인 요청을 제외한 모든 요청입니다.\n\n웹에서 온 요청일 때만 리퀘스트의 쿠키에서 헤더로 JWT를 옮겨줍니다.\n\n### 왜? 굳이 쿠키에서 헤더로..?\n\n옮겼느냐!라고 생각하실 분들이 있으실텐데요. (잘 아시는 분들이라면 부럽습니다. 저는 헤맸었거든요)\n\nDRF에서 JWT를 사용하면서 사용자를 식별하기 위해\n```python\nrest_framework_simplejwt.authentication.JWTAuthentication\n```\n를 사용합니다. 저도 이 인증방식을 기본으로 채택해놨구요.\n이 JWTAuthentication을 조금 살펴봅시다.\n\n```python\ndef authenticate(self, request: Request) -> Optional[Tuple[AuthUser, Token]]:\n        header = self.get_header(request)\n\n        if header is None:\n            return None\n\n        raw_token = self.get_raw_token(header)\n        if raw_token is None:\n            return None\n\n        validated_token = self.get_validated_token(raw_token)\n\n        return self.get_user(validated_token), validated_token\n        \ndef get_header(self, request: Request) -> bytes:\n        """\n        Extracts the header containing the JSON web token from the given\n        request.\n        """\n        header = request.META.get(api_settings.AUTH_HEADER_NAME)\n        if isinstance(header, str):\n            # Work around django test client oddness\n            header = header.encode(HTTP_HEADER_ENCODING)\n```\n\nJWTAuthentication의 일부 함수들인데요.\n음.. 쿠키로 인증하는 내용은 없어보입니다? 읽어보니 기본 인증 헤더(Authorization)으로부터 JWT를 가져오네요. 물론 JWTAuthentication을 상속받아 쿠키에서도 토큰을 가져오도록 커스텀 할 수도 있겠습니다만은, 저는 미들웨어에서 그냥 헤더로 넣어버리는 방법을 선택해봤습니다.\n\n> JWTAuthentication를 통과하고나면 request.user에 유저 객체 또는 AnonymousUser가 들어갑니다. 이를 통해 APIView에서 permission_classes로 권한 설정을 쉽게 할 수 있었어요!\n\n```python\n    def get_validated_token(self, raw_token: bytes) -> Token:\n        """\n        Validates an encoded JSON web token and returns a validated token\n        wrapper object.\n        """\n        messages = []\n        for AuthToken in api_settings.AUTH_TOKEN_CLASSES:\n            try:\n                return AuthToken(raw_token)\n            except TokenError as e:\n                messages.append(\n                    {\n                        "token_class": AuthToken.__name__,\n                        "token_type": AuthToken.token_type,\n                        "message": e.args[0],\n                    }\n                )\n\n        raise InvalidToken(\n            {\n                "detail": _("Given token not valid for any token type"),\n                "messages": messages,\n            }\n        )\n\n```\n\nauthenticate 함수 내에서 실행되는 토큰 확인 함수입니다. 여기서 정상적인 토큰인지, 토큰이 만료되었는지 확인하게 됩니다. simple_jwt 라이브러리에서 정의된 AuthToken 클래스에서 확인합니다. 여기서 위 흐름도의 401을 반환하는 경우의 수를 충족하겠죠? get_user 함수를 통해 유저 객체를 반환해줍니다.\n\n## 드디어 View로..\n\nDRF에서 APIView를 사용해 유저의 권한을 쉽게 확인할 수 있습니다.\n아래에 View를 두 개 올려둘게요.\n```python\nclass UserManageView(APIView):\n    serializer_class = ApproveUserSerializer\n    permission_classes = [IsAdminUser]\n\n    def get(self, request):\n        queryset = User.objects.filter(is_approved=False)\n        if queryset:\n            serializer = self.serializer_class(queryset, many=True)\n            return Response(serializer.data)\n        else:\n            return Response({"error": "No Content"}, status=status.HTTP_404_NOT_FOUND)\n\n    def patch(self, request, *args, **kwargs):\n        user_id = kwargs.get("user_id")\n        user = User.objects.get(id=user_id)\n\n        serializer = ApproveUserSerializer(user, data={"is_approved": True}, partial=True)\n        if serializer.is_valid():\n            serializer.save()\n            return Response({"success": True}, status=status.HTTP_202_ACCEPTED)\n\n        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)\n\nclass GithubOAuthCallBackView(APIView):\n    permission_classes = [AllowAny]\n\n    def get(self, request: Request):\n        if code := request.GET.get("code"):\n            response = self.send_code_to_github_login_view(code)\n            if response.status_code == 200:\n                return Response(response.json(), status=status.HTTP_200_OK)\n            return Response(\n                {"error": "Failed to process with GithubLoginView"},\n                status=response.status_code,\n            )\n\n    def send_code_to_github_login_view(self, code: str):\n        url = "http://localhost:8000/api/auth/github/login"\n        payload = {"code": code}\n        headers = {"Content-Type": "application/json"}\n        response = requests.post(url, json=payload, headers=headers)\n\n        return response\n```\n\n#### GithubOAuthCallBackView\n이 뷰는 소셜 로그인에서 콜백 부분을 담당하는 부분입니다.\n',
    genre: 'app',
    like: 0,
    version: 0,
    image:
      'https://wtnt-bucket.s3.ap-northeast-2.amazonaws.com/team/test2/image.jpg',
    leader_name: '강태원',
  },
  tech: [
    {
      id: 4,
      tech: '자바스프링',
      need_num: 2,
      current_num: 0,
    },
    {
      id: 3,
      tech: '크로스플랫폼',
      need_num: 3,
      current_num: 0,
    },
    {
      id: 5,
      tech: '안드로이드',
      need_num: 3,
      current_num: 0,
    },
  ],
  url: [],
  is_leader: true,
}
const ApplyResponseData = {
  id: 4,
  team_id: 36,
  user_id: 4,
  created_at: '2024-04-26T02:24:42.910791',
  bio: '열심히 하겠습니다!!',
  tech: '웹프론트엔드',
}
const InprogressProjectData = {
  team: [
    {
      id: 22,
      title: '안티호정카페',
      image:
        'https://wtnt-bucket.s3.ap-northeast-2.amazonaws.com/team/안티호정카페/image.jpg',
      category: [
        {
          id: 38,
          tech: '자바',
          need_num: 2,
          current_num: 0,
        },
        {
          id: 37,
          tech: '웹프론트엔드',
          need_num: 3,
          current_num: 0,
        },
      ],
      leader_info: {
        id: 1112,
        name: '강태원',
      },
      like: 0,
      version: 0,
      view: 0,
      genre: '웹',
      is_like: false,
    },
    {
      id: 23,
      title: '안티호정카페',
      image:
        'https://wtnt-bucket.s3.ap-northeast-2.amazonaws.com/team/안티호정카페/image.jpg',
      category: [
        {
          id: 38,
          tech: '자바',
          need_num: 2,
          current_num: 0,
        },
        {
          id: 37,
          tech: '웹프론트엔드',
          need_num: 3,
          current_num: 0,
        },
      ],
      leader_info: {
        id: 1112,
        name: '강태원',
      },
      like: 0,
      version: 0,
      view: 0,
      genre: '웹',
      is_like: false,
    },
    {
      id: 24,
      title: '안티호정카페',
      image:
        'https://wtnt-bucket.s3.ap-northeast-2.amazonaws.com/team/안티호정카페/image.jpg',
      category: [
        {
          id: 38,
          tech: '자바',
          need_num: 2,
          current_num: 0,
        },
        {
          id: 37,
          tech: '웹프론트엔드',
          need_num: 3,
          current_num: 0,
        },
      ],
      leader_info: {
        id: 1112,
        name: '강태원',
      },
      like: 0,
      version: 0,
      view: 0,
      genre: '웹',
      is_like: false,
    },
  ],
  is_owner: false,
}
const AccomplishedData = {
  team: [
    // {
    //   id: 22,
    //   title: '왓냥',
    //   image:
    //     'https://wtnt-bucket.s3.ap-northeast-2.amazonaws.com/team/안티호정카페/image.jpg',
    //   category: [
    //     {
    //       id: 38,
    //       tech: '자바',
    //       need_num: 2,
    //       current_num: 0,
    //     },
    //     {
    //       id: 37,
    //       tech: '웹프론트엔드',
    //       need_num: 3,
    //       current_num: 0,
    //     },
    //   ],
    //   leader_info: {
    //     id: 1112,
    //     name: '장호정',
    //   },
    //   like: 0,
    //   version: 0,
    //   view: 0,
    //   genre: '웹',
    //   is_like: false,
    // },
  ],
  is_owner: false,
}

export {
  AssignData,
  EntireData,
  ProfileData,
  ProjectDetailData,
  ApplyResponseData,
  InprogressProjectData,
  AccomplishedData,
}
