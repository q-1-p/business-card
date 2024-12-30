const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function ProfileDetails() {
  const test = async () => {
    await sleep(1000);
    return "test";
  };

  return <h1>{test()}</h1>;
}
