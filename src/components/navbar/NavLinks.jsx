function NavLinks({ link }) {
  if (link.mark) {
    return (
      <li>
        <a
          href="#"
          className="block py-2 pl-3 pr-4 text-white bg-pink-900 rounded md:bg-transparent md:text-pink-700 md:p-0 dark:text-white"
          aria-current="page"
        >
          {link.text}
        </a>
      </li>
    );
  }

  return (
    <li>
      <a
        href="#"
        className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        aria-current="page"
      >
        {link.text}
      </a>
    </li>
  );
}



//       {/* <li>
//         <a
//           href="#"
//           className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
//           aria-current="page"
//         >
//           Home
//         </a>
//       </li>
//       <li>
//         <a
//           href="#"
//           className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//         >
//           About
//         </a>
//       </li> */}
//     </ul>
//   );
// }

export default NavLinks;
