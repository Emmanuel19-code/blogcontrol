import React from 'react'
import QuillEditor from '../components/QuillEditor'

const WritePage = () =>  {
    return (
    <div className="p-2">
        <div className="mt-10">
                <div>
                  <QuillEditor
                   buttonName={"Publish"}
                  />
                </div>
        </div>
     </div>
  )
}

export default WritePage