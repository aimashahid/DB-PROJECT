import React from 'react'
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

function StaffHomepage(){ 
  let navigate = useNavigate();
  const [option, setoption] = useState("");
  let {staff_type, staff_id} = useParams();

  const hirestaff = () => {
    if (staff_type === "Manager" || staff_type === "Owner")
    {
      return(
        navigate("/hirestaff/"+staff_type + "/" + staff_id)
      )
    }
    else
    {
      return(
        alert("Unauthorized Action! Request Failed")
      )
    }
  };

  const firestaff = () => {
    if(staff_type === "Manager" || staff_type === "Owner")
    {
      return(
        navigate("/firestaff/" + staff_type + "/" + staff_id)
      )
    }

    else
    {
      return(
        alert("Unauthorized Action! Request Failed")
      )
      
    }
  };

  const viewinventory = () => {
    if(staff_type === "Manager" || staff_type === "Owner")
    {
      return(
        navigate("/viewinventory/" + staff_type + "/" + staff_id)
      )
    }

    else
    {
      return(
        alert("Unauthorized Action! Request Failed")
      )
      
    }
  };

  const updateinventory = () => {
    if(staff_type === "Manager" || staff_type === "Owner")
    {
      return(
        navigate("/updateinventory/" + staff_type + "/" + staff_id)
      )
    }

    else
    {
      return(
        alert("Unauthorized Action! Request Failed")
      )
      
    }
  };

  const setroomrates = () => {
    if(staff_type === "Manager" || staff_type === "Owner")
    {
      return(
        navigate("/setroomrates/" + staff_type + "/" + staff_id)
      )
    }

    else
    {
      return(
        alert("Unauthorized Action! Request Failed")
      )
      
    }
  };

  const deleteroom = () => {
    if(staff_type === "Manager" || staff_type === "Owner")
    {
      return(
        navigate("/deleteroom/" + staff_type + "/" + staff_id)
      )
    }

    else
    {
      return(
        alert("Unauthorized Action! Request Failed")
      )
      
    }
  };

  const updateaccinfo = () => {
    
    navigate("/supdateaccinfo/" + staff_type + "/" + staff_id)

  };

  const viewstaffpanel = () => {
    if(staff_type === "Manager" || staff_type === "Owner")
    {
      return(
        navigate("/viewstaffpanel/" + staff_type + "/" + staff_id)
      )
    }

    else
    {
      return(
        alert("Unauthorized Action! Request Failed")
      )
      
    }
  };

  const addfacility = () => {
    if(staff_type === "Manager" || staff_type === "Owner")
    {
      return(
        navigate("/addfacility/" + staff_type + "/" + staff_id)
      )
    }

    else
    {
      return(
        alert("Unauthorized Action! Request Failed")
      )
      
    }
  };

  const deletefacility = () => {
    if(staff_type === "Manager" || staff_type === "Owner")
    {
      return(
        navigate("/deletefacility/" + staff_type + "/" + staff_id)
      )
    }

    else
    {
      return(
        alert("Unauthorized Action! Request Failed")
      )
    }
  };

  const changeSch = () => {
    if(staff_type === "Manager" || staff_type === "Owner")
    {
      return(
        navigate("/changestaffsch/" + staff_type + "/" + staff_id)
      )
    }
    else
    {
      return(
        alert("Unauthorized Action! Request Failed")
      )
    }
  };

  const staffreservation = () => {
    if(staff_type === "Receptionist")
    {
      return(
        navigate("/staffreservation/" + staff_type + "/" + staff_id)
      )
    }
    else
    {
      return(
        alert("Unauthorized Action! Request Failed")
      )
    }
  };

  const staffcancelreservation= () => {
    if(staff_type === "Receptionist")
    {
      return(
        navigate("/staffcancelreservation/" + staff_type + "/" + staff_id)
      )
    }
    else
    {
      return(
        alert("Unauthorized Action! Request Failed")
      )
    }
  };

  const staffrooms= () => {
    if(staff_type === "Receptionist")
    {
      return(
        navigate("/staffrooms/" + staff_type + "/" + staff_id)
      )
    }
    else
    {
      return(
        alert("Unauthorized Action! Request Failed")
      )
    }
  };

  const searchbooking= () => {
    if(staff_type === "Receptionist")
    {
      return(
        navigate("/searchbooking/" + staff_type + "/" + staff_id)
      )
    }
    else
    {
      return(
        alert("Unauthorized Action! Request Failed")
      )
    }
  };

  const Supdatepasswords = () => {
    
    return(
    navigate("/supdatepassword/" + staff_type + "/" + staff_id)
    )

  };


  const logOut = () => {
    alert("Logged Out succesfully");
    navigate("/signin");
};

const search = () => {
  if(option === "Hire Staff")
  {
    hirestaff()
  }
  else if (option === "Fire Staff")
  {
    firestaff()
  }
  else if (option === "View Hotel Inventory")
  {
    viewinventory()
  }
  else if (option === "Update Hotel Inventory")
  {
    updateinventory()
  }
  else if (option === "Set Room Rates")
  {
    setroomrates()
  }
  else if (option === "Delete Room")
  {
    deleteroom()
  }
  else if( option === "Update account information")
  {
    updateaccinfo()
  }
  else if( option === "View staff panel")
  {
    viewstaffpanel()
  }
  else if (option ==="Add a facility")
  {
    addfacility()
  }
  else if(option === "Delete a facility")
  {
    deletefacility()
  }
  else if(option === "Change Staff Schedule")
  {
    changeSch()
  }
  else if(option === "Make customer reservation")
  {
    staffreservation()
  }
  else if(option === "Cancel customer reservation")
  {
    staffcancelreservation()
  }
  else if(option === "List of Available Rooms")
  {
    staffrooms()
  }
  else if(option === "Search for a Booking")
  {
    searchbooking()
  }
  else if(option === "Update Password")
  {
    Supdatepasswords()
  }
};

  return (
        <div>
         <h2 id="panel"> Staff Homepage </h2>

         <label></label>
                <input 
                type="text"
                placeholder="Search here..."
                onChange={(event) => {
                    setoption(event.target.value);
            }}
            /> 
            <button id='panel_search'
                onClick={(event) => [search()]}>
                Search
            </button>

            <button
                onClick={(event) => [hirestaff()]}>
                Hire Staff
            </button>     

             <button
              onClick={(event) => [firestaff()]}>
              Fire Staff
            </button>       
        
            <button
              onClick={(event) => [viewinventory()]}>
              View Hotel Inventory
            </button>

            <button
              onClick={(event) => [updateinventory()]}>
              Update Hotel Inventory
            </button>

            <button
              onClick={(event) => [Supdatepasswords()]}>
              Update Password
            </button>

            <button
              onClick={(event) => [updateaccinfo()]}>
              Update account information 
            </button>

            <button
              onClick={(event) => [setroomrates()]}>
              Set Room Rates 
            </button>

            <button
              onClick={(event) => [deleteroom()]}>
              Delete Room
            </button>

            <button
              onClick={(event) => [viewstaffpanel()]}>
              View staff panel
            </button>

            <button
              onClick={(event) => [addfacility()]}>
              Add a facility
            </button>

            <button
              onClick={(event) => [deletefacility()]}>
              Delete a facility
            </button>

            <button
              onClick={(event) => [changeSch()]}>
              Change Staff Schedule
            </button>

            <button
              onClick={(event) => [staffreservation()]}>
              Make customer reservation
            </button>

            <button
              onClick={(event) => [staffcancelreservation()]}>
              Cancel customer reservation
            </button>

            <button
              onClick={(event) => [staffrooms()]}>
              List of Available Rooms
            </button>

            <button
              onClick={(event) => [searchbooking()]}>
              Search for a booking
            </button>

            <button
              onClick={(event) => [logOut()]}>
              Logout
            </button>

        </div>

    )
}

export default (StaffHomepage);