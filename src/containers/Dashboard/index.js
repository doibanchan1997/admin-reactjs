import React from 'react';
const Dashboard = () => {
    return (
        <div className="wraper">
        <div className="row">
          <div className="col-3 col-m-6 col-sm-6">
            <div className="counter bg-primary">
              <i className="fas fa-tasks" />
              <h3>100+</h3>
              <p>Todo</p>
            </div>
          </div>
          <div className="col-3 col-m-6 col-sm-6">
            <div className="counter bg-warning">
              <i className="fas fa-spinner" />
              <h3>100+</h3>
              <p>Todo</p>
            </div>
          </div>
          <div className="col-3 col-m-6 col-sm-6">
            <div className="counter bg-success">
              <i className="fas fa-check-circle" />
              <h3>100+</h3>
              <p>Todo</p>
            </div>
          </div>
          <div className="col-3 col-m-6 col-sm-6">
            <div className="counter bg-danger">
              <i className="fas fa-bug" />
              <h3>100+</h3>
              <p>Todo</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8 col-m-12 col-sm-12">
            <div className="card">
              <div className="card-header">
                header
                <i className="fas fa-ellipsis-h" />
              </div>
              <div className="card-content">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>project</th>
                      <th>manager</th>
                      <th>status</th>
                      <th>due date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>react js</td>
                      <td>Hao Nguyen</td>
                      <td>
                        <span className="dot">
                          <i className="bg-success" />
                          complete
                        </span>
                      </td>
                      <td>19/10/2020</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>react js</td>
                      <td>Hao Nguyen</td>
                      <td>
                        <span className="dot">
                          <i className="bg-success" />
                          complete
                        </span>
                      </td>
                      <td>19/10/2020</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>react js</td>
                      <td>Hao Nguyen</td>
                      <td>
                        <span className="dot">
                          <i className="bg-success" />
                          complete
                        </span>
                      </td>
                      <td>19/10/2020</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>react js</td>
                      <td>Hao Nguyen</td>
                      <td>
                        <span className="dot">
                          <i className="bg-success" />
                          complete
                        </span>
                      </td>
                      <td>19/10/2020</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>react js</td>
                      <td>Hao Nguyen</td>
                      <td>
                        <span className="dot">
                          <i className="bg-success" />
                          complete
                        </span>
                      </td>
                      <td>19/10/2020</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-4 col-m-12 col-sm-12">
            <div className="card">
              <div className="card-header">
                <h3>Inprpgress</h3>
                <i className="fa fa-ellipsis-h" />
              </div>
              <div className="card-content">
                <div className="progress-wrapper">
                  <p>
                    less than 1 hour
                    <span className="float-right">50%</span>
                  </p>
                  <div className="progress">
                    <div className="bg-success" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="progress-wrapper">
                  <p>
                    less than 1 hour
                    <span className="float-right">50%</span>
                  </p>
                  <div className="progress">
                    <div className="bg-success" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="progress-wrapper">
                  <p>
                    less than 1 hour
                    <span className="float-right">50%</span>
                  </p>
                  <div className="progress">
                    <div className="bg-success" style={{width: '50%'}} />
                  </div>
                </div>
                <div className="progress-wrapper">
                  <p>
                    less than 1 hour
                    <span className="float-right">50%</span>
                  </p>
                  <div className="progress">
                    <div className="bg-success" style={{width: '50%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    )
}
export default Dashboard;