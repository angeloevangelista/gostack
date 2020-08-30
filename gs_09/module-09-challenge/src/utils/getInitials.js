export default function getInitials(fullName) {
  const [firstName, lastName] = fullName.split(' ');

  return `${firstName.charAt(0).toUpperCase()}${
    lastName ? lastName.charAt(0).toUpperCase() : ''
  }`;
}
