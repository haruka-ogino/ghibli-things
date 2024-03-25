import {
  useQuery,
  // useMutation,
  // useQueryClient,
  // MutationFunction,
} from '@tanstack/react-query'
import { getDishes } from '../apis/filmsApi.ts'
import RandomDishes from './RandomDishes.tsx'

export default function Dishes() {
  const {
    data: dishes,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ['dishes'], queryFn: getDishes })

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return <h1>Error; {error.message}</h1>

  if (dishes) {
    return (
      <>
        <RandomDishes />
        <ul>
          {dishes.map((dish, index) => (
            <li key={index}>
              <h2>{dish.name}</h2>
              <img src={dish.image_url} alt={`${dish.name} dish`} />
            </li>
          ))}
        </ul>
      </>
    )
  }
}
