import { Disclosure } from '@headlessui/react'
import SpoonacularApi from './SpoonacularApi'

const RecipeCard = ({recipe}) => {
  return (
    <Disclosure>
      <Disclosure.Button className="py-2">
      <h2>{recipe}</h2>
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500">
        This is where the recipe will go...
      </Disclosure.Panel>
    </Disclosure>
  )
};

export default RecipeCard;