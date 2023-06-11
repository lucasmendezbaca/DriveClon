import './FileViwer.css'
import { type File as TypeFile } from '../../../../modules/files/domain/File'

interface FileViwerProps {
  file: TypeFile
}

function FileViwer({ file }: FileViwerProps): JSX.Element {
  if (file.type.startsWith('image')) {
    return (
      <div className='file-viwer'>
        {/* <p className='file-viwer__info'>
          {file.name} {file.size}
        </p> */}
        <object
          className='file-viwer__object--image'
          data={file.path}
          type={file.type}
          width='100%'
          height='100%'
        ></object>
      </div>
    )
  }

  return (
    <div className='file-viwer'>
      <object className='file-viwer__object' data={file.path} type={file.type} width='100%' height='100%'></object>
    </div>
  )
}

export default FileViwer
