import logo from './logo.svg';
import './App.css';
import './tailwind.css'

function App() {
  return (
    <div className="block w-full h-32">
      <header className="w-full h-40 bg-blue-900">
        <ul className="p-10 text-white">
          <li><a href="#">About Us</a></li>
          <li><a href="#">How does it work?</a></li>
        </ul>
        <div className="flex justify-between">
          <div className="display-flex">
            <h1><a href="#">a</a></h1>
            <ul className="flex">
              <li><a href="#">General Health</a></li>
              <li className="mr-4"><a href="#">Beauty</a></li>
              <li className="mr-4"><a href="#">Hospital &amp; Doctor</a></li>
              <li className="mr-4"><a href="#">Deals</a></li>
              <li className="mr-4"><a href="#">Article &amp; Experts</a></li>
            </ul>
          </div>
        </div>
      </header>
      <p className="inline-block text-right text-9xl">Text test</p>
      <span className="block w-72 h-32 text-center bg-red-500 text-green-100 rounded-lg">Text test2</span>
      <ul className="block w-72 h-32 bg-gradient-to-r from-yellow-200 via-indigo-500 to-pink-300 text-center">
        <li>A</li>
        <li>B</li>
        <li>C</li>
      </ul>

      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
<div>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* max-width: 80rem; margin: 0 auto; padding: 0 1rem;
      @media (min-width: 640px) {padding: 0 1.5rem;}
      @media (min-width: 1024px) {padding: 0 2rem;} */}
      <div class="flex items-center justify-between h-16">
        {/* display: flex; align-items: center; justify-content: space-between; height: 4rem; */}
        <div class="flex items-center">
          <div class="flex-shrink-0">
            {/* 	flex-shrink: 0; */}
            {/* <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"> */}
          </div>
          <div class="hidden md:block">
            {/* display: hidden;
            @media (min-width: 768px) {display: block;} */}
            <div class="ml-10 flex items-baseline space-x-4">
              {/* margin-left:2.5rem; display: flex; align-items: baseline; 
                ** Space Between **
                --tw-space-x-reverse: 0;
                margin-right: calc(1rem * var(--tw-space-x-reverse));
                margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse))); */}
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>
              {/* padding: 0.5rem 0.75rem; border-radius: 0.375rem; font-size: 0.75rem; line-height: 1rem; font-weight: 500; */}
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
              {/* padding: 1rem 0.75rem; border-radius: 0.375rem; font-size: 0.875rem; line-height: 1.25rem; font-weight: 500; */}
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>

              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>

              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Reports</a>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          {/* display: none; 
          @media (min-width: 768px) {display:block;} */}
          <div class="ml-4 flex items-center md:ml-6">
            {/* margin-left: 1rem; display: flex; align-items: center; 
            @media (min-width: 786px) {margin-left: 1.5rem;} */}
            <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              {/* padding: 0.25rem; border-radius: 9999px;  */}
              <span class="sr-only">View notifications</span>
              {/* <!-- Heroicon name: outline/bell --> */}
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {/* height: 1.5rem; width: 1.5rem; */}
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            {/* <!-- Profile dropdown --> */}
            <div class="ml-3 relative">
              {/* margin-left: 0.75rem; position: relative; */}
              <div>
                <button type="button" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  {/* max-width: 20rem; border-radius: 9999px; display: flex; align-items: center; font-size: 0.875rem; line-height: 1.25rem;  */}
                  <span class="sr-only">Open user menu</span>
                  {/* <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
                </button>
              </div>

              {/* <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              --> */}
              <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                {/* traonsform-origin: top right; position: absolute; right: 0px; margin-top: 0.5rem; width: 12rem; border-radius: 0.375rem; --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); padding: 0.25rem 0; */}
                {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                {/* display: block; padding: 0.5rem 1rem; font-size: 0.875rem; line-height:1.25rem; */}

                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>

                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
              </div>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          {/* margin-right: -1rem; display: flex; 
          @media (min-width: 786px) {display: hidden;} */}
          {/* <!-- Mobile menu button --> */}
          <button type="button" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            {/* display: inline-flex; align-items: center; justify-content: center; padding: 1rem; border-radius: 0.375rem; */}
            <span class="sr-only">Open main menu</span>
            {/* <!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {/* display: block; height: 1.5rem; width: 1.5rem; */}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {/* <!--
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            --> */}
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {/* display: none; height: 1.5rem; width: 1.5rem; */}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    {/* <!-- Mobile menu, show/hide based on menu state. --> */}
    <div class="md:hidden" id="mobile-menu">
      {/* @media (min-width: 786px) {display: none;} */}
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {/* padding: 0.5rem 0.5rem 0.75rem; --tw-space-y-reverse: 0;
          margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
          margin-bottom: calc(0.25rem * var(--tw-space-y-reverse))
          @media (min-width: 640px) {padding: 0 0.75rem;} */}
        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
        <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>
        {/* display: block; padding: 0.5rem 0.75rem; border-radius:0.375rem; font-size: 1rem; line-height: 1.5rem; font-weight: 500; */}

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Reports</a>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        {/* padding: 1rem 0 0.75rem; border-top: 1px solid gray; */}
        <div class="flex items-center px-5">
          {/* display: flex; align-items: center; padding: 0 1.25rem; */}
          <div class="flex-shrink-0">
            {/* flex-shrink: 0; */}
            {/* <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
          </div>
          <div class="ml-3">
            {/* margin-left: 0.75rem; */}
            <div class="text-base font-medium leading-none text-white">Tom Cook</div>
            {/* font-size: 1rem; font-weight: 500; line-height: 1 */}
            <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
            {/* font-size: 0.875rem; font-weight: 500; line-height: 1 */}
          </div>
          <button type="button" class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            {/* margin-left: auto; flex-shrink: 0; padding: 0.25rem; border-radius: 9999px;  */}
            <span class="sr-only">View notifications</span>
            {/* <!-- Heroicon name: outline/bell --> */}
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {/* height: 1.5rem; width: 1.5rem; */}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
        <div class="mt-3 px-2 space-y-1">
          {/* margin-top: 0.75rem; padding: 0 0.5rem;  */}
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</a>
          {/* display: block; padding: 0.5rem 0.75rem; border-radius:0.375rem; font-size: 1rem; line-height: 1.5rem; */}

          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a>

          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</a>
        </div>
      </div>
    </div>
  </nav>

  <header class="bg-white shadow">
    {/* background-color: white; 
    --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);  */}
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      {/* max-width: 80rem; margin: 0 auto; padding: 1.5rem 1rem; 
      @media (min-width: 640px) {padding-left: 1.5rem; padding-right: 1.5rem;
      @media (min-width: 1024px) {padding-left: 2rem; padding-right: 2rem;}} */}
      <h1 class="text-3xl font-bold text-gray-900">
        {/* font-size: 1.875rem; line-height: 2.25rem; font-weight: 700; */}
        Dashboard
      </h1>
    </div>
  </header>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      {/* max-width: 80rem; margin: 0 auto; padding: 1.5rem;
      @media (min-width: 640px) {padding-left: 1.5rem; padding-right: 1.5rem;}
      @media (min-width: 1024px) {padding-left: 2rem; padding-right: 2rem;} */}
      {/* <!-- Replace with your content --> */}
      <div class="px-4 py-6 sm:px-0">
        {/* padding: 1.5rem 1rem; 
        @media (min-width: 640px) {padding-left: 0; padding-right: 0;} */}
        <div class="border-2 border-dashed border-gray-200 rounded-lg h-40"></div>
        {/* border: 2px dashed gray; border-radius: 0.5rem; height: 10rem;*/}
      </div>
      {/* <!-- /End replace --> */}
    </div>
  </main>
</div>

      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
    <div class="flex flex-col">  
{/* display: flex; flex-direction: column; */}
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"> 
  {/* margin: -0.5rem 0; overflow-x: auto; 
  @media (min-width:640px) {margin: 0 -1.5rem;} 
  @media (min width: 1024px) {margin: 0 2rem;} */}
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      {/* padding: 0.5rem 0; vertical-align: middle; display: inline-block;	min-width: 100%;
      @media (min-width: 640px) {padding: 0 1.5rem;}
      @media (min-width: 1024px) {padding: 0 2rem;} */}
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        {/* --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
          overflow: hidden; border-bottom: 1px solid rgba(229, 231, 235) 
          @media (min-width: 640px) {border-radius: 0.5rem;} */}
        <table class="min-w-full divide-y divide-gray-200">
          {/* min-width: 100%; --tw-divide-y-reverse: 0;
            border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
            border-bottom-width: calc(1px * var(--tw-divide-y-reverse)); */}
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {/* padding: 0.75rem 1.5rem; text-align: left; font-size: 0.75rem; line-height: 1.25rem; text-transform: uppercase; letter-spacing: 0.05rem; */}
                Name
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th scope="col" class="relative px-6 py-3">
                {/* position: relative; padding: 0.75rem 1.5rem; */}
                <span class="sr-only">Edit</span>
                {/* sr-only --> Screen Reader 
                position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: react(0,0,0,0); white-space: nowrap; border-width: 0; */}
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {/* --tw-divide-y-reverse: 0;
              border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
              border-bottom-width: calc(1px * var(--tw-divide-y-reverse)); */}
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                {/* padding: 1rem 1.5rem;	white-space: nowrap; */}
                <div class="flex items-center">
                  {/* display:flex; align-items: center; */}
                  <div class="flex-shrink-0 h-10 w-10">
                    {/* flex-shrink: 0; height: 2.5rem; width: 2.5rem; */}
                    {/* <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""> */}
                  </div>
                  <div class="ml-4">
                    {/* margin-left: 1rem; */}
                    <div class="text-sm font-medium text-gray-900">
                      {/* font-size: 0.75rem; line-height: 1rem; font-weight: 500; */}
                      Jane Cooper
                    </div>
                    <div class="text-sm text-gray-500">
                      {/* font-size: 0.75rem; line-height: 1rem; */}
                      jane.cooper@example.com
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
                <div class="text-sm text-gray-500">Optimization</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {/* padding: 0 0.5rem; display-inline-flex; font-size: 0.75rem; line-height: 1.5rem; font-weight: 600; border-radius: 9999px; */}
                  Active
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Admin
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    {/* <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""> */}
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      Jane Cooper
                    </div>
                    <div class="text-sm text-gray-500">
                      jane.cooper@example.com
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
                <div class="text-sm text-gray-500">Optimization</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Admin
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    {/* <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""> */}
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      Jane Cooper
                    </div>
                    <div class="text-sm text-gray-500">
                      jane.cooper@example.com
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
                <div class="text-sm text-gray-500">Optimization</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Admin
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  
  );
}
/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from '@heroicons/react/solid'

export default function Example() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      {/* background-color: white; overflow: hidden; 
      @media (min-width: 640px; border-radius: 0.5rem;) */}
      <div className="px-4 py-5 sm:px-6">
        {/* padding: 1.25rem 1rem; 
        @media (min-width: 640px) {padding-left: 1.5rem; padding-right: 1.5rem;} */}
        <h3 className="text-lg leading-6 font-medium text-gray-900">Applicant Information</h3>
        {/* font-size: 1.125rem; line-height: 1.5rem; font-weight: 500; */}
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
        {/* margin-top: 0.25rem; max-width: 42rem; font-size: 0.875rem; line-height: 1.25rem; */}
      </div>
      <div className="border-t border-gray-200">
        {/* border-top: 1px solid gray; */}
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            {/* padding: 1.25rem 1rem; 
            @media (min-width: 640px) {grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; padding-left: 1.5rem; padding-right: 1.5rem;} */}
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
             {/* font-size: 0.875rem; lind-height: 1.25rem; font-weight:500; */}
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Margot Foster</dd>
            {/* margin-top: 0.25rem; font-size: 0.875rem;
            @media (min-width) {margin-top: 0; grid-column: span 2 / span 2;} */}
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Application for</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Backend Developer</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">margotfoster@example.com</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Salary expectation</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">$120,000</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            {/* background-color: white; padding: 1.25rem 1rem; 
            @media (min-width: 640px) {grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; padding-left: 1.25rem; padding-right: 1.25rem;} */}
            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
            {/* font-size: 0.875rem; font-weight: 500; */}
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {/* margin-top: 0.25rem; font-size: 0.875rem; line-height: 1.25rem;
              @media (min-width: 640px) {margin-top: 0; grid-column: span 2 / span 2;} */}
              <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                {/* border: 1px solid gray; border-radius: 0.375rem; --tw-divide-y-reverse: 0;
                border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
                border-bottom-width: calc(1px * var(--tw-divide-y-reverse)); */}
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  {/* padding: 0.75rem 1rem 0.75rem 0.75reml display: flex; align-items: center; justify-content: space-between; font-size: 0.875rem; line-height: 1.25rem; */}
                  <div className="w-0 flex-1 flex items-center">
                    {/* width: 0px; flex: 1 1 0%; align-items: center; */}
                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    {/* flex-shring: 0; height: 1.25rem; width: 1.25rem;  */}
                    <span className="ml-2 flex-1 w-0 truncate">resume_back_end_developer.pdf</span>
                    {/* margin-left: 0.5rem; flex: 1 1 0%; width: 0px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; */}
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {/* margin-left: 1rem; flex-shrink: 0; */}
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      {/* font-weight: 500; */}
                      Download
                    </a>
                  </div>
                </li>
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  {/* padding: 0.75rem 0.75rem 0.75rem 1rem; display: flex; align-item: center; justify-content: space-between; font-size: 0.875rem; line-height: 1.25rem; */}
                  <div className="w-0 flex-1 flex items-center">
                    {/* width: 0px; flex: 1 1 0%; display: flex; align-items: center; */}
                    <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    {/* flex-shrink: 0; height: 1.25rem; width: 1.25rem; */}
                    <span className="ml-2 flex-1 w-0 truncate">coverletter_back_end_developer.pdf</span>
                    {/* margin-left: 0.5rem; flex: 1 1 0%; width: 0px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; */}
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Example() {
  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          {/* @media (min-width: 768px) {grid-tamplate-columns: repeat(3, minmax(0, 1fr)); gap: 1.5rem;} */}
          <div className="md:col-span-1">
            {/* @media (min-width: 768px) {grid-column: span 1 / span 1;} */}
            <div className="px-4 sm:px-0">
              {/* padding: 0 1rem;
              @media (min-width: 640px) {padding: 0} */}
              <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
              {/* font-size: 1.125rem; line-height: 1.5rem; font-weight: 500; */}
              <p className="mt-1 text-sm text-gray-600">
                {/* margin-top: 0.25rem; font-size: 0.875rem; line-height: 1.25rem; */}
                This information will be displayed publicly so be careful what you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            {/* margin-top: 1.25rem; 
            @media (min-width: 768px) {margin-top: 0; grid-column: span 2 / span 2;} */}
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                {/* @media (min-width: 640px) {border-radius: 0.375rem; overflow: hidden;} */}
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  {/* padding: 1.25rem 1rem; background-color: white; --tw-space-y-reverse: 0;
                    margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
                    margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
                    @media (min-width: 640px) {padding: 1.5rem;} */}
                  <div className="grid grid-cols-3 gap-6">
                    {/* grid-tamplate-columns: repeat(3, minmax(0, 1fr)); gap: 1.5rem; */}
                    <div className="col-span-3 sm:col-span-2">
                      {/* grid-column: span 3 / span 3; 
                      @media (min-width: 640px) {grid-column: span 2 / span 2;} */}
                      <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        {/* display: block; font-size: 0.875rem; line-height: 1.25rem; font-weight: 500; */}
                        Website
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        {/* margin-top: 0.25rem; display: flex; border-radius: 0.375rem; 
                        --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
                        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); */}
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          {/* display: inline-flex; align-items: center; padding-left: 0.75rem; padding-right: 0.75rem; border-top-left-radius: 0.375rem; border-bottom-left-radius: 0.375rem; border: 1px solid gray; border-right: 0; font-size: 0.875rem; line-height: 1.5rem; */}
                          http://
                        </span>
                        <input
                          type="text"
                          name="company-website"
                          id="company-website"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="www.example.com"
                        />
                        {/* flex: 1 1 0%; display: block; width: 100%; border-radius: 0px; border-top-right: 0.375rem; border-bottom-right: 0.375rem; 
                        @media (mon-width: 640px) {font-size: 0.875rem; line-height: 1.25rem;} */}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                      {/* display : block; font-size: 0.875rem; line-height:1.25rem; */}
                      About
                    </label>
                    <div className="mt-1">
                      {/* margin-top: 0.25rem; */}
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="you@example.com"
                        defaultValue={''}
                      />
                      {/* --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
                        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
                        margin-top: 0.25rem; display: block; width: 100%; border: 1px solid gray; border-radius: 0.375rem;
                        @media (min-width: 640px) {font-size: 0.875reml line-height:1.25rem; border: 1px solid gray; } */}
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      {/* margin-top: 0.5rem; font-size: 0.875rem; line-height: 1.25rem; */}
                      Brief description for your profile. URLs are hyperlinked.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Photo</label>
                    {/* display: block; font-size: 0.875rem; line-height: 1.25rem; font-weight: 500; */}
                    <div className="mt-1 flex items-center">
                      {/* margin-top: 0.25rem; display: flex; align-items: center; */}
                      <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        {/* height: 3rem; width: 3rem; border-radius: 9999px; overflow: hidden; background-color: gray; */}
                        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          {/* height: 100%; width: 100%; */}
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                      <button
                        type="button"
                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        {/* margin-left: 1.25rem; background-color: white; padding: 0.5rem 0.75rem; border: 1px solid gray; border-radius: 0.375rem; box-shadow: ~~~ ; font-size: 0.875rem; line-height: 1rem; font-weight: 500; */}
                        Change
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                    {/* display: block; font-size: 0.875rem; line-height: 1.25rem; font-weight: 500; */}
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
              <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Country / Region
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Street address
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="state"
                        id="state"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        ZIP / Postal
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
              <p className="mt-1 text-sm text-gray-600">Decide which communications you'd like to receive and how.</p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <fieldset>
                    <legend className="text-base font-medium text-gray-900">By Email</legend>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="comments"
                            name="comments"
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="comments" className="font-medium text-gray-700">
                            Comments
                          </label>
                          <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="candidates"
                            name="candidates"
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="candidates" className="font-medium text-gray-700">
                            Candidates
                          </label>
                          <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="offers"
                            name="offers"
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="offers" className="font-medium text-gray-700">
                            Offers
                          </label>
                          <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <div>
                      <legend className="text-base font-medium text-gray-900">Push Notifications</legend>
                      <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                    </div>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="push-everything"
                          name="push-notifications"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                          Everything
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                          Same as email
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-nothing"
                          name="push-notifications"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
                          No push notifications
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}



export default App;
