import React from "react"
import Title from "../globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Notre histoire" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum sequi possimus perferendis necessitatibus laborum ut,
              laudantium porro eaque, adipisci nisi reprehenderit deserunt
              molestiae, eos cum sapiente facilis illo quibusdam dolorem commodi
              consequuntur praesentium non! Rerum nostrum doloremque,
              repellendus debitis ut temporibus, laborum et inventore fuga esse,
              pariatur omnis rem cumque?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
