import Header from "../../components/Header"
import type { Contents, ContentType } from "../../interface/Contents";

interface Home {
  contents: Contents | undefined;
}
export default function Home({ contents }: Home) {

  return (
    <div>
      <Header />
      <div className="pt-20 bg-gray-100">
        {contents?.posts.map((content: ContentType) => {
          console.log(content)
          return (
            <div key={content.id} className="mx-auto max-w-sm sm:max-w-lg lg:max-w-3xl mb-5 font-[Roboto,sans-serif] p-4 bg-white shadow-[0_0_5px_rgba(0,0,0,0.1)]">
              <div className="text-xl font-bold pb-5">{content.title}</div>
              <div>{content.body}</div>
              <div className="flex items-center italic text-sm text-gray-300">
                <div className="pr-1">tags:</div>
                {content.tags.map(tag=>{
                  return(
                    <div className="mr-2 cursor-pointer hover:text-blue-300">
                      {tag}
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-evenly">
                <div className="cursor-pointer">Like</div>
                <div className="cursor-pointer">Comment</div>
                <div className="cursor-pointer">Share</div>
              </div>
              

            </div>
          );
        })}
      </div>
    </div>
  );
}