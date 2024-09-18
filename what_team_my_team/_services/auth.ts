import axiosInstance from '@/_lib/axios'

export async function logoutApi() {
  const response = await axiosInstance.post('/auth/logout')

  return response
}
