
const FromComponent = () =>{
  return (<form className="form-data-control">
          <div className="row">
            <div className="form-control">
              <label htmlFor="name" className="label">
                Name
                <input
                  type="text"
                  value={name !== undefined ? name : ""}
                  className="input"
                  name="name"
                  onChange={e => this.onChangeState(e)}
                />
              </label>
              <span style={{ color: "red" }}>
                {this.state.errors && this.state.errors["name"]}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="form-control">
              <label htmlFor="desc" className="label">
                Description
                <input
                  type="text"
                  value={desc !== undefined ? desc : ""}
                  className="input"
                  name="desc"
                  onChange={e => this.onChangeState(e)}
                />
              </label>
              <span style={{ color: "red" }}>
                {this.state.errors && this.state.errors["desc"]}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="form-control">
              <label htmlFor="date" className="label">
                Date
                <input
                  type="text"
                  value={date !== undefined ? date : ""}
                  className="input"
                  name="date"
                  onChange={e => this.onChangeState(e)}
                />
              </label>
              <span style={{ color: "red" }}>
                {this.state.errors && this.state.errors["date"]}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="form-control">
              <label htmlFor="time" className="label">
                Time
                <input
                  type="text"
                  value={time !== undefined ? time : ""}
                  className="input"
                  name="time"
                  onChange={e => this.onChangeState(e)}
                />
              </label>
              <span style={{ color: "red" }}>
                {this.state.errors && this.state.errors["time"]}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="form-control">
              <button
                className="button-save"
                onClick={e => this.onAdd(e)}
                disabled={isEdit}
              >
                Save
              </button>
              {isEdit && (
                <button
                  className="button-save"
                  onClick={e => this.toEditUpdate(e)}
                >
                  Update
                </button>
              )}
            </div>
          </div>
        </form>)
}
