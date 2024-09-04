import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';

import userImage from '@/../public/images/user.webp';
import { Button } from '@/components/ui/button';
import { SearchInput } from '@/components/ui/other/search-input';

import PeriodFilter from './period-filter';

export default function LeaderboardTable() {
  return (
    <div className="space-y-10 overflow-x-auto p-2">
      <div className="flex flex-wrap justify-between gap-4">
        <PeriodFilter />
        <SearchInput placeholder="Search" className="w-full sm:min-w-80" />
      </div>

      <div className="overflow-x-auto">
        <Table />
      </div>

      <Pagination />
    </div>
  );
}

function Table() {
  return (
    <table className="w-full text-left text-gray-500">
      <thead className="font-thin text-light">
        <tr className="text-lg bg-accent-gradient">
          <th
            scope="col"
            className="whitespace-nowrap rounded-l-full py-4 pl-8 pr-6"
          >
            Rank
          </th>
          <th scope="col" className="min-w-48 whitespace-nowrap px-6 py-4">
            Player
          </th>
          <th scope="col" className="whitespace-nowrap px-6 py-4">
            Points
          </th>
          <th scope="col" className="whitespace-nowrap px-6 py-4">
            Win
          </th>
          <th scope="col" className="whitespace-nowrap px-6 py-4">
            Loss
          </th>
          <th
            scope="col"
            className="whitespace-nowrap rounded-r-full px-6 py-4"
          >
            Win %
          </th>
        </tr>
      </thead>
      <tbody className="text-primary">
        <tr className="h-4" />
        <tr className="bg-gray-50 hover:bg-gray-100">
          <td className="py-4 pl-8 pr-6">#1</td>
          <td className="flex items-center px-6 py-4">
            <Image
              src={userImage}
              alt="Jese image"
              className="size-14 rounded-full"
            />
            <div className="ps-3">Player 1</div>
          </td>
          <td className="px-6 py-4">48,650</td>
          <td className="px-6 py-4">80</td>
          <td className="px-6 py-4">20</td>
          <td className="px-6 py-4">80%</td>
        </tr>
        <tr className="hover:bg-gray-100">
          <td className="py-4 pl-8 pr-6">#2</td>
          <td className="flex items-center px-6 py-4">
            <Image
              src={userImage}
              alt="Jese image"
              className="size-14 rounded-full"
            />
            <div className="ps-3">Player 2</div>
          </td>
          <td className="px-6 py-4">48,650</td>
          <td className="px-6 py-4">80</td>
          <td className="px-6 py-4">20</td>
          <td className="px-6 py-4">80%</td>
        </tr>
        <tr className="bg-gray-50 hover:bg-gray-100">
          <td className="py-4 pl-8 pr-6">#3</td>
          <td className="flex items-center px-6 py-4">
            <Image
              src={userImage}
              alt="Jese image"
              className="size-14 rounded-full"
            />
            <div className="ps-3">Player 3</div>
          </td>
          <td className="px-6 py-4">48,650</td>
          <td className="px-6 py-4">80</td>
          <td className="px-6 py-4">20</td>
          <td className="px-6 py-4">80%</td>
        </tr>
        <tr className="hover:bg-gray-100">
          <td className="py-4 pl-8 pr-6">#4</td>
          <td className="flex items-center px-6 py-4">
            <Image
              src={userImage}
              alt="Jese image"
              className="size-14 rounded-full"
            />
            <div className="ps-3">Player 4</div>
          </td>
          <td className="px-6 py-4">48,650</td>
          <td className="px-6 py-4">80</td>
          <td className="px-6 py-4">20</td>
          <td className="px-6 py-4">80%</td>
        </tr>
        <tr className="bg-gray-50 hover:bg-gray-100">
          <td className="py-4 pl-8 pr-6">#5</td>
          <td className="flex items-center px-6 py-4">
            <Image
              src={userImage}
              alt="Jese image"
              className="size-14 rounded-full"
            />
            <div className="ps-3">Player 5</div>
          </td>
          <td className="px-6 py-4">48,650</td>
          <td className="px-6 py-4">80</td>
          <td className="px-6 py-4">20</td>
          <td className="px-6 py-4">80%</td>
        </tr>
        <tr className="hover:bg-gray-100">
          <td className="py-4 pl-8 pr-6">#6</td>
          <td className="flex items-center px-6 py-4">
            <Image
              src={userImage}
              alt="Jese image"
              className="size-14 rounded-full"
            />
            <div className="ps-3">Player 6</div>
          </td>
          <td className="px-6 py-4">48,650</td>
          <td className="px-6 py-4">80</td>
          <td className="px-6 py-4">20</td>
          <td className="px-6 py-4">80%</td>
        </tr>
        <tr className="bg-gray-50 hover:bg-gray-100">
          <td className="py-4 pl-8 pr-6">#6</td>
          <td className="flex items-center px-6 py-4">
            <Image
              src={userImage}
              alt="Jese image"
              className="size-14 rounded-full"
            />
            <div className="ps-3">Player 7</div>
          </td>
          <td className="px-6 py-4">48,650</td>
          <td className="px-6 py-4">80</td>
          <td className="px-6 py-4">20</td>
          <td className="px-6 py-4">80%</td>
        </tr>
        <tr className="hover:bg-gray-100">
          <td className="py-4 pl-8 pr-6">#8</td>
          <td className="flex items-center px-6 py-4">
            <Image
              src={userImage}
              alt="Jese image"
              className="size-14 rounded-full"
            />
            <div className="ps-3">Player 8</div>
          </td>
          <td className="px-6 py-4">48,650</td>
          <td className="px-6 py-4">80</td>
          <td className="px-6 py-4">20</td>
          <td className="px-6 py-4">80%</td>
        </tr>
        <tr className="bg-gray-50 hover:bg-gray-100">
          <td className="py-4 pl-8 pr-6">#9</td>
          <td className="flex items-center px-6 py-4">
            <Image
              src={userImage}
              alt="Jese image"
              className="size-14 rounded-full"
            />
            <div className="ps-3">Player 9</div>
          </td>
          <td className="px-6 py-4">48,650</td>
          <td className="px-6 py-4">80</td>
          <td className="px-6 py-4">20</td>
          <td className="px-6 py-4">80%</td>
        </tr>
        <tr className="hover:bg-gray-100">
          <td className="py-4 pl-8 pr-6">#10</td>
          <td className="flex items-center px-6 py-4">
            <Image
              src={userImage}
              alt="Jese image"
              className="size-14 rounded-full"
            />
            <div className="ps-3">Player 10</div>
          </td>
          <td className="px-6 py-4">48,650</td>
          <td className="px-6 py-4">80</td>
          <td className="px-6 py-4">20</td>
          <td className="px-6 py-4">80%</td>
        </tr>
      </tbody>
    </table>
  );
}

function Pagination() {
  return (
    <div className="flex items-center justify-end gap-4">
      <p>1 of 99</p>
      <div className="space-x-2">
        <Button variant="outline" className="size-10 p-0">
          <ChevronLeftIcon className="size-5" />
        </Button>
        <Button variant="outline" className="size-10 p-0">
          <ChevronRightIcon className="size-5" />
        </Button>
      </div>
    </div>
  );
}
