import FilesWrapper from "../../components/file";

export type FileListType = { fileName: string; icon?: string }[];

function RootPage() {
  const Files: FileListType = [{ fileName: "card" }];
  return <FilesWrapper fileList={Files} />;
}

export default RootPage;
