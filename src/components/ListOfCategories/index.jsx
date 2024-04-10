import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { Loading } from '../Loading'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    setTimeout(() => {
      window.fetch('https://petgram-server-bea.beaps.now.sh/categories')
        .then(res => res.json())
        .then(response => {
          setCategories(response)
          setLoading(false)
        })
    }, 1000)
  }, [])
  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Loading key='loading'><Category /></Loading>
          : categories.map(category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
      }
    </List>
  )

  // if (loading) {
  //   return <Loading />
  // }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
