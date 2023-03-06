/**
 * Wait for `duration` seconds **asynchronously**.
 *
 * https://stackoverflow.com/a/39914235
 */
export async function sleep(duration: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, duration * 1000));
}
