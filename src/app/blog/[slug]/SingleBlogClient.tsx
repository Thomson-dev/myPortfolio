"use client";
import useLocalStorage from "../../components/theme/useLocalStorage";
import SingleBlogScreen from "../../Screens/SingleBlogScreen";

export default function SingleBlogClient({ post }: { post: any }) {
  const [theme] = useLocalStorage("theme", "light");
  return <SingleBlogScreen post={post} theme={theme} />;
}