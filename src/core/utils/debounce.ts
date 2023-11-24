class Debounce {
  private timer: NodeJS.Timeout | null = null;

  public run(callback: VoidFunction, timeout: number = 300) {
    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(callback, timeout);
  }
}

export default Debounce;
