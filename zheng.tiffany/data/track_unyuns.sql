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
-- Table structure for table `track_unyuns`
--

CREATE TABLE `track_unyuns` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `category` varchar(64) NOT NULL,
  `type` varchar(64) NOT NULL,
  `img` varchar(256) NOT NULL,
  `date_create` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_unyuns`
--

INSERT INTO `track_unyuns` (`id`, `user_id`, `category`, `type`, `img`, `date_create`) VALUES
(1, 10, 'Pantry', 'Eggs', './images/unyun-photos/Eggs.jpg', '2020-03-16'),
(2, 3, 'Vegetables', 'Cauliflower', './images/unyun-photos/Cauliflower.jpg', '2020-04-07'),
(3, 1, 'Vegetables', 'Green Onions', './images/unyun-photos/Green Onions.jpg', '2020-02-24'),
(4, 5, 'Vegetables', 'Green Onions', './images/unyun-photos/Green Onions.jpg', '2020-09-19'),
(5, 8, 'Pantry', 'Eggs', './images/unyun-photos/Eggs.jpg', '2020-01-03'),
(6, 10, 'Pantry', 'Eggs', './images/unyun-photos/Eggs.jpg', '2020-08-21'),
(59, 1, 'Fruits', 'onion', './images/icons/unyun-image-empty.svg', '2020-12-13'),
(9, 10, 'Vegetables', 'Green Onions', './images/unyun-photos/Green Onions.jpg', '2020-09-10'),
(73, 1, 'Vegetables', 'Broccoli', 'uploads/1607890478.2604_Broccoli.jpg', '2020-12-13'),
(11, 3, 'Pantry', 'Eggs', './images/unyun-photos/Eggs.jpg', '2020-02-24'),
(12, 7, 'Vegetables', 'Broccoli', './images/unyun-photos/Broccoli.jpg', '2020-06-19'),
(13, 8, 'Pantry', 'Chicken Stock', './images/unyun-photos/Chicken Stock.jpg', '2020-03-05'),
(14, 9, 'Fruits', 'Plums', './images/unyun-photos/Plums.jpg', '2020-09-27'),
(15, 4, 'Pantry', 'Garlic', './images/unyun-photos/Garlic.jpg', '2020-09-13'),
(16, 4, 'Vegetables', 'Broccoli', './images/unyun-photos/Broccoli.jpg', '2020-06-24'),
(17, 3, 'Fruits', 'Strawberries', './images/unyun-photos/Strawberries.jpg', '2020-11-13'),
(18, 3, 'Fruits', 'Grapes', './images/unyun-photos/Grapes.jpg', '2020-01-01'),
(19, 3, 'Pantry', 'Eggs', './images/unyun-photos/Eggs.jpg', '2020-04-29'),
(20, 4, 'Fruits', 'Grapes', './images/unyun-photos/Grapes.jpg', '2020-05-01'),
(21, 8, 'Vegetables', 'Green Onions', './images/unyun-photos/Green Onions.jpg', '2020-03-07'),
(22, 7, 'Fruits', 'Grapes', './images/unyun-photos/Grapes.jpg', '2020-07-02'),
(23, 8, 'Pantry', 'Chicken Stock', './images/unyun-photos/Chicken Stock.jpg', '2020-04-04'),
(24, 3, 'Pantry', 'Garlic', './images/unyun-photos/Garlic.jpg', '2020-02-03'),
(25, 4, 'Pantry', 'Garlic', './images/unyun-photos/Garlic.jpg', '2020-05-13'),
(26, 6, 'Fruits', 'Plums', './images/unyun-photos/Plums.jpg', '2020-03-10'),
(27, 6, 'Fruits', 'Plums', './images/unyun-photos/Plums.jpg', '2020-04-25'),
(66, 1, 'Vegetables', 'Cauli', 'uploads/1607889010.9943_Cauliflower.jpg', '2020-12-13'),
(29, 2, 'Fruits', 'Strawberries', 'uploads/1607853773.9759_Eggs.jpg', '2020-03-01'),
(30, 10, 'Fruits', 'Strawberries', './images/unyun-photos/Strawberries.jpg', '2020-07-01'),
(31, 10, 'Vegetables', 'Cauliflower', './images/unyun-photos/Cauliflower.jpg', '2020-07-20'),
(32, 3, 'Fruits', 'Tangerines', './images/unyun-photos/Tangerines.jpg', '2020-04-24'),
(33, 10, 'Fruits', 'Grapes', './images/unyun-photos/Grapes.jpg', '2020-06-09'),
(34, 7, 'Pantry', 'Garlic', './images/unyun-photos/Garlic.jpg', '2020-05-06'),
(35, 5, 'Vegetables', 'Green Onions', './images/unyun-photos/Green Onions.jpg', '2020-08-24'),
(36, 4, 'Vegetables', 'Cauliflower', './images/unyun-photos/Cauliflower.jpg', '2020-06-24'),
(37, 7, 'Fruits', 'Plums', './images/unyun-photos/Plums.jpg', '2020-03-20'),
(38, 7, 'Vegetables', 'Green Onions', './images/unyun-photos/Green Onions.jpg', '2020-05-31'),
(39, 7, 'Fruits', 'Tangerines', './images/unyun-photos/Tangerines.jpg', '2020-06-08'),
(40, 1, 'Pantry', 'Eggs', './images/unyun-photos/Eggs.jpg', '2020-08-31'),
(41, 9, 'Vegetables', 'Green Onions', './images/unyun-photos/Green Onions.jpg', '2020-09-30'),
(43, 2, 'Fruits', 'Strawberries', './images/unyun-photos/Strawberries.jpg', '2020-10-28'),
(44, 10, 'Vegetables', 'Broccoli', './images/unyun-photos/Broccoli.jpg', '2020-07-23'),
(45, 3, 'Fruits', 'Grapes', './images/unyun-photos/Grapes.jpg', '2020-07-08'),
(46, 9, 'Vegetables', 'Broccoli', './images/unyun-photos/Broccoli.jpg', '2020-10-03'),
(47, 1, 'Fruits', 'Strawberries', './images/unyun-photos/Strawberries.jpg', '2020-03-19'),
(65, 1, 'Cat', 'Suju', 'uploads/1607888014.1708_IMG_20171227_202108_257.jpg', '2020-12-13'),
(49, 4, 'Pantry', 'Chicken Stock', './images/unyun-photos/Chicken Stock.jpg', '2020-09-06'),
(50, 7, 'Vegetables', 'Green Onions', './images/unyun-photos/Green Onions.jpg', '2020-01-02'),
(51, 8, 'Vegetables', 'Onions', 'https://via.placeholder.com/400/?text=Unyun', '2020-12-11'),
(52, 13, 'Vegetables', 'Broccoli', 'uploads/1607892735.4836_Broccoli.jpg', '2020-12-12'),
(53, 13, 'Pantry', 'Eggs', 'uploads/1607892745.5019_Eggs.jpg', '2020-12-12'),
(54, 16, 'Vegetables', 'Green Onions', 'https://via.placeholder.com/400/?text=Unyun', '2020-12-12'),
(55, 16, '', 'Chicken Stock', './images/icons/unyun-image-empty.svg', '2020-12-12'),
(56, 16, 'Pantry', 'Chicken Stock', './images/icons/unyun-image-empty.svg', '2020-12-12'),
(57, 16, 'Fruits', 'Grapes', 'images/icons/unyun-image-empty.svg', '2020-12-12'),
(58, 16, 'Fruits', 'Tangerines', 'images/icons/unyun-image-empty.svg', '2020-12-12'),
(72, 1, 'Pantry', 'Chicken Stock', 'uploads/1607890423.0389_Chicken Stock.jpg', '2020-12-13'),
(69, 1, 'Vegetables', 'Garlic Heads', 'uploads/1607889713.2712_Garlic.jpg', '2020-12-13'),
(76, 13, 'Fruits', 'Strawberries', 'uploads/1607892786.1353_Strawberries.jpg', '2020-12-13'),
(64, 4, 'pantry', 'garlic', 'uploads/1607887947.7838_Garlic.jpg', '2020-12-13'),
(75, 1, 'Pantry', 'Rice', 'uploads/1607892025.8433_Jasmine Rice.jpg', '2020-12-13'),
(84, 19, 'Fruits', 'Tiffy Fruit', 'uploads/1607897595.5309_848AA644-6235-4738-8304-1C4DC5FBAE5C.jpg', '2020-12-13'),
(78, 13, 'Pantry', 'Short Grain Rice', 'uploads/1607892831.3815_Jasmine Rice.jpg', '2020-12-13'),
(79, 13, 'Fruits', 'Clementines', 'uploads/1607892854.106_Tangerines.jpg', '2020-12-13'),
(80, 13, 'Fruits', 'Green Grapes', 'uploads/1607892862.5689_Grapes.jpg', '2020-12-13'),
(81, 13, 'Pantry', 'Chicken Broth', 'uploads/1607892903.3619_Chicken Stock.jpg', '2020-12-13'),
(85, 13, 'Fruits', 'Plums', 'uploads/1607897938.9135_Plums.jpg', '2020-12-13'),
(86, 21, 'math', 'chart', 'uploads/1607901251.3249_Picture1.png', '2020-12-13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `track_unyuns`
--
ALTER TABLE `track_unyuns`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `track_unyuns`
--
ALTER TABLE `track_unyuns`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
