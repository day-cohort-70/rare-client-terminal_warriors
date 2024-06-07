import { useState } from "react"
import { createTag, listTags } from "../../managers/TagManager.js"

export const CreateTag = ({ setTags }) => {
  const [label, setLabel] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()

    const tag_object = {
      label: label
    }

    createTag(tag_object).then(() =>
        listTags().then((res) => setTags(res))
    )
  }

  return (
    <div className="box has-background-primary m-3">
      <form onSubmit={handleSubmit}>
        <div className="field is-horizontal">
          <label className="label m-auto pr-3">Tag Name:</label>
          <input
            className="input"
            type="text"
            value={label}
            onChange={(event) => setLabel(event.target.value)}
            required
          />
        </div>
        <div className="field is-horizontal is-justify-content-center"> {/* Center the button */}
          <button className="button is-info has-text-weight-bold is-size-5 mt-4">Create Tag</button>
        </div>
      </form>
    </div>
  )
}
