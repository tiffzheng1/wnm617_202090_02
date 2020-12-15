-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 14, 2020 at 01:35 AM
-- Server version: 5.6.49-cll-lve
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tzheng8_wnm608`
--

-- --------------------------------------------------------

--
-- Table structure for table `track_users`
--

CREATE TABLE `track_users` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `username` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(32) NOT NULL,
  `img` varchar(256) NOT NULL,
  `phone` varchar(64) NOT NULL,
  `gender` varchar(8) NOT NULL,
  `date_create` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_users`
--

INSERT INTO `track_users` (`id`, `name`, `username`, `email`, `password`, `img`, `phone`, `gender`, `date_create`) VALUES
(1, 'Freda Bowman', 'user1', 'user1@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', './images/users/user1.jpg', '+1 (919) 458-2097', 'female', '2020-02-13'),
(2, 'Angeline Wise', 'user2', 'user2@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', './images/users/user2.jpg', '+1 (941) 558-2149', 'female', '2020-08-27'),
(3, 'Chandra Cook', 'user3', 'user3@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', './images/users/user3.jpg', '+1 (869) 519-2399', 'female', '2020-03-11'),
(4, 'Langley Hahn', 'user4', 'user4@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', './images/users/user4.jpg', '+1 (946) 448-3909', 'male', '2020-08-08'),
(5, 'Kari Mcdonald', 'user5', 'user5@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', './images/users/user5.jpg', '+1 (896) 596-3024', 'female', '2020-07-19'),
(6, 'Kristie Crane', 'user6', 'user6@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', './images/users/user6.jpg', '+1 (833) 504-2733', 'female', '2020-01-14'),
(7, 'Erna Rush', 'user7', 'user7@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', './images/users/user7.jpg', '+1 (928) 444-3494', 'female', '2020-03-21'),
(8, 'Madeline Herrera', 'user8', 'user8@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', './images/users/user8.jpg', '+1 (962) 494-2454', 'female', '2020-06-02'),
(9, 'Carroll Langley', 'user9', 'user9@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', './images/users/user9.jpg', '+1 (805) 480-3272', 'male', '2020-01-03'),
(10, 'Steele Mcclure', 'user10', 'user10@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', './images/users/user10.jpg', '+1 (976) 510-3852', 'male', '2020-02-09'),
(16, 'Tiffany Z', 'user000', 'user000@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'uploads/1607837418.9095_bootsandcats.jpg', ' ', ' ', '2020-12-12'),
(17, ' ', '', '', 'd41d8cd98f00b204e9800998ecf8427e', './images/icons/user-profile-empty.svg', ' ', ' ', '2020-12-12'),
(13, ' Tiffany Zheng', 'user0', 'user0@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'uploads/1607893038.4409_DSC00122 copy.jpg', ' ', ' ', '2020-12-08'),
(18, ' Name Name', 'User 123', 'user123@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'uploads/1607855339.6717_bootsandcats.jpg', ' ', ' ', '2020-12-13'),
(19, ' ', 'User 456', 'user456@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', './images/icons/user-profile-empty.svg', ' ', ' ', '2020-12-13'),
(20, ' ', 'user101', 'user101@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', './images/icons/user-profile-empty.svg', ' ', ' ', '2020-12-13'),
(21, ' ', 'user999', 'hello@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'uploads/1607901464.2151_Picture1.png', ' ', ' ', '2020-12-13'),
(22, ' ', 'user221', 'user221@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', './images/icons/user-profile-empty.svg', ' ', ' ', '2020-12-13'),
(23, ' ', 'user18', '18@user.com', '1a1dc91c907325c69271ddf0c944bc72', './images/icons/user-profile-empty.svg', ' ', ' ', '2020-12-13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `track_users`
--
ALTER TABLE `track_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `track_users`
--
ALTER TABLE `track_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
