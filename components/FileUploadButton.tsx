import { ReactNode, useRef } from "react";

type IProps = {
  acceptedFileTypes?: string;
  allowMultipleFiles?: boolean;
  onChange: (formData: FormData) => void;
  uploadFileName: string;
  children: ReactNode;
}

const FileUploadButton = (props: IProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const onClickHandler = () => {
    fileInputRef.current?.click();
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) {
      return;
    }

    const formData = new FormData();

    Array.from(event.target.files).forEach((file) => {
      formData.append(event.target.name, file);
    });

    props.onChange(formData);

    formRef.current?.reset();
  };

  return (
    <form ref={formRef}>
      <button type="button" style={{border: 'none', padding: '5px 10px', borderRadius: '3px'}} onClick={onClickHandler}>
        {props.children}
      </button>
      <input
        accept={props.acceptedFileTypes}
        multiple={props.allowMultipleFiles}
        name={props.uploadFileName}
        onChange={onChangeHandler}
        ref={fileInputRef}
        style={{ display: 'none' }}
        type="file"
      />
    </form>
  );
};

FileUploadButton.defaultProps = {
  acceptedFileTypes: '',
  allowMultipleFiles: false,
};

export default FileUploadButton;
