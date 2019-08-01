import React from 'react';

const BookingSidebar = ({ listingType }) => {
	return (
		<div className="sidebar_box booking">
			<h4>Reservation</h4><hr/>
			<form className="form booking_form" action="new_booking.html">
				<div className="form-group">
					<label htmlFor="startDate">Check In</label>
					<input type="date" name="startDate" className="form-control datepicker"/>
				</div>
				<div className="form-group">
					<label htmlFor="startDate">Check Out</label>
					<input type="date" name="endDate" className="form-control datepicker" disabled/>
				</div>
				
				<div className="booking_preview" style={{display: "none"}}>
					<table className="table">
						<tbody>
							<tr>
								<td>Price</td>
								<td>$250.00</td>
							</tr>
							<tr>
								<td>Night(s)</td>
								<td>10</td>
							</tr>
							<tr>
								<td className="total">Total</td>
								<td>$2500.00</td>
							</tr>
						</tbody>
					</table>
				</div>

				<input type="submit" value="Book Now" className="btn btn-danger btn-block"/>
			</form>
		</div>
	)
};

BookingSidebar.displayName = 'BookingSidebar';

export default BookingSidebar;