import { useEffect, useState } from "react"
import {useParams}  from 'react-router-dom'

import {collection, getDocs, query, where, orderBy, limit, startAfter,} from 'firebase/firestore' 
import {db} from '../firebase.config' 
import{toast} from 'react-toastify'
import Spinner from '../components/Spinner'
import { FirebaseError } from "firebase/app"



function Category() {
  const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState(true)

  const params = useParams()
  useEffect(() =>{
    const fetchListings = async() =>{
      try{
        // Get reference
        const listingsRef = collection(db, 'listings')

        //Create a query

        const q = query(listingsRef, where('type', '==', params.categoryName), orderBy('timestamp', 'desc'), limit(10))
        // firebase.get().where().orderBy



         //Execute query
      const querySnap = await getDocs(q)

      let listings = []

      querySnap.forEach((doc) =>{
        return listings.push({
          Id:doc.id,
          data:doc.data()
        })
      })
      setListings(listings)
      setLoading(false)

      }
      catch(error){
        toast.error('Could not fetch listings')

      }
    }
    fetchListings()
  }, [])

  return <div className="Category">
    <header>
      <p className="pageHeader">
      {params.categoryName === 'rent'? 'Places for rent' : 'places for sale'} </p>
    </header>

    {loading? <Spinner/> : listings && listings.length >0 ? (<></>) : (<p>
      No listings for {params.categoryName}
    </p>)}
  </div>

}

export default Category