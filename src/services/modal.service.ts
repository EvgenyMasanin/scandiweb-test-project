export class ModalService {
  private static callBacks: Map<() => void, (e: MouseEvent) => void> = new Map()

  static onOutsideClick(element: HTMLElement, callback: () => void): void {
    const handleClick = (e: MouseEvent) => {
      if (!element.contains(e.target as HTMLElement)) {
        callback()
      }
    }

    window.addEventListener('click', handleClick)

    ModalService.callBacks.set(callback, handleClick)
  }

  static removeListener(callback: () => void): void {
    const handleClick = ModalService.callBacks.get(callback)

    if (handleClick) {
      window.removeEventListener('click', handleClick)
    }
  }
}
