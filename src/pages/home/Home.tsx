import Header from "../../components/Header"
import type { Contents, ContentType } from "../../interface/Contents";
import ContentsBody from "./Contents";

interface Home {
  contents: Contents | undefined;
}
export default function Home({ contents }: Home) {

  return (
    <div>
      <Header />
      <div className="pt-20 bg-gray-100">
        {contents?.posts.map((content: ContentType) => {
          return (
            <div key={content.id}>
              <ContentsBody
                content={content}
              />
            </div>

          );
        })}
      </div>
    </div>
  );
}