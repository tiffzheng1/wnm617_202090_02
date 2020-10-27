
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
  `date_create` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_users`
--

INSERT INTO `track_users` (`id`, `name`, `username`, `email`, `password`, `img`, `date_create`) VALUES
(1, 'Rodgers Gill', 'user1', 'user1@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/778/fff/?text=user1', '2020-09-05 12:25:54'),
(2, 'Velasquez Bullock', 'user2', 'user2@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/907/fff/?text=user2', '2020-04-11 02:33:21'),
(3, 'Holloway Burton', 'user3', 'user3@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/867/fff/?text=user3', '2020-08-23 04:57:50'),
(4, 'Chelsea Horn', 'user4', 'user4@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/737/fff/?text=user4', '2020-10-02 12:03:49'),
(5, 'Bauer Duke', 'user5', 'user5@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/754/fff/?text=user5', '2020-07-01 08:16:42'),
(6, 'Riley Dejesus', 'user6', 'user6@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/942/fff/?text=user6', '2020-02-07 02:41:01'),
(7, 'Georgia Garrett', 'user7', 'user7@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/703/fff/?text=user7', '2020-07-13 05:58:02'),
(8, 'Grant Glass', 'user8', 'user8@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/705/fff/?text=user8', '2020-04-12 10:55:43'),
(9, 'Combs Banks', 'user9', 'user9@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/913/fff/?text=user9', '2020-05-07 08:19:34'),
(10, 'Mccormick Bridges', 'user10', 'user10@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', 'https://via.placeholder.com/400/978/fff/?text=user10', '2020-08-05 05:06:42');
