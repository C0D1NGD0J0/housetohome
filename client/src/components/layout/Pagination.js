import React, { Component } from 'react';

class Pagination extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
			<div className="row">
				<div className="col-sm-12">
					<nav aria-label="Page navigation" className="pagination-nav">
					  <ul className="pagination pagination-lg">
					    <li>
					      <a href="#" aria-label="Previous">
					        <span aria-hidden="true">&laquo;</span>
					      </a>
					    </li>
					    <li><a href="#">1</a></li>
					    <li><a href="#">2</a></li>
					    <li><a href="#">3</a></li>
					    <li><a href="#">4</a></li>
					    <li><a href="#">5</a></li>
					    <li>
					      <a href="#" aria-label="Next">
					        <span aria-hidden="true">&raquo;</span>
					      </a>
					    </li>
					  </ul>
					</nav>
				</div>
			</div>        
    );
  }
}

export default Pagination;