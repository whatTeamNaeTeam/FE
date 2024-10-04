import { useState } from 'react'

export function useDragDrop() {
  const [isActive, setActive] = useState(false)

  const handleDragStart = () => setActive(true)
  const handleDragEnd = () => setActive(false)
  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault()
  }
  const handleDrop = (
    event: React.DragEvent,
    dropCallback: (file: FileList) => void,
  ) => {
    event.preventDefault()

    const { files } = event.dataTransfer
    if (!files || files.length === 0) {
      return
    }

    dropCallback && dropCallback(files)
    setActive(false)
  }

  return {
    isActive,
    handleDragStart,
    handleDragEnd,
    handleDrop,
    handleDragOver,
  }
}
