
-- --------------------------------------------------------

--
-- Table structure for table `track_unyuns`
--

CREATE TABLE `track_unyuns` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `category` varchar(64) NOT NULL,
  `type` varchar(64) NOT NULL,
  `description` text NOT NULL,
  `img` varchar(256) NOT NULL,
  `date_create` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_unyuns`
--

INSERT INTO `track_unyuns` (`id`, `user_id`, `category`, `type`, `description`, `img`, `date_create`) VALUES
(1, 9, 'pantry', 'jasmine rice', 'Mollit ullamco veniam aliqua est magna est nisi. Voluptate aliqua laborum excepteur excepteur ipsum enim incididunt cillum. Reprehenderit non exercitation consectetur ad laborum elit est.', 'https://via.placeholder.com/400/750/fff/?text=jasmine rice', '2020-09-23 03:25:52'),
(2, 5, 'pantry', 'spam', 'Ad voluptate in deserunt qui pariatur. Magna incididunt esse consectetur duis eu aute. Dolor exercitation incididunt ut consectetur magna.', 'https://via.placeholder.com/400/734/fff/?text=spam', '2020-02-15 01:57:32'),
(3, 9, 'fruits', 'grapes', 'Consectetur magna sit fugiat commodo non enim duis laboris velit deserunt ut do ut. Consequat incididunt eiusmod et Lorem velit eiusmod magna id est deserunt incididunt anim. Aute commodo exercitation aliqua non occaecat quis laborum laboris pariatur labore.', 'https://via.placeholder.com/400/932/fff/?text=grapes', '2020-10-05 12:29:54'),
(4, 10, 'pantry', 'jasmine rice', 'Officia officia veniam minim minim commodo excepteur aliqua id enim commodo. Commodo sit aute officia est culpa consectetur pariatur ad ex ullamco excepteur exercitation. Aliquip sunt minim id minim aliquip adipisicing nisi.', 'https://via.placeholder.com/400/924/fff/?text=jasmine rice', '2020-09-04 01:40:06'),
(5, 6, 'vegetables', 'green onions', 'Et minim veniam sit dolor commodo elit velit. Irure sint commodo minim in minim fugiat eiusmod nulla enim sunt dolore sint. Cupidatat mollit culpa velit officia ipsum enim voluptate laboris fugiat.', 'https://via.placeholder.com/400/998/fff/?text=green onions', '2020-05-23 06:11:09'),
(6, 9, 'fruits', 'grapes', 'Quis cillum magna voluptate sit officia dolore cillum sit duis laborum consectetur. Cupidatat enim qui anim excepteur tempor. Veniam cupidatat voluptate labore voluptate id amet eiusmod dolore consequat aliqua nisi fugiat fugiat laborum.', 'https://via.placeholder.com/400/814/fff/?text=grapes', '2020-06-10 02:49:03'),
(7, 6, 'fruits', 'grapes', 'Id nostrud ad excepteur duis enim adipisicing. Aliqua incididunt sint magna ex commodo tempor tempor eu magna nisi et ex. Cillum ipsum ex excepteur mollit cillum et dolore magna eu aute consequat.', 'https://via.placeholder.com/400/914/fff/?text=grapes', '2020-05-14 12:40:56'),
(8, 2, 'vegetables', 'green onions', 'Ipsum ad tempor sit Lorem ullamco ullamco ea laboris proident nostrud. Dolore occaecat dolore id non excepteur est aute elit minim id in. Proident id sint aliquip anim nisi.', 'https://via.placeholder.com/400/849/fff/?text=green onions', '2020-10-10 07:43:16'),
(9, 9, 'fruits', 'plums', 'Ea amet cupidatat veniam ullamco. Culpa nisi aliquip laborum pariatur cupidatat. Magna ad commodo duis ea deserunt eiusmod fugiat velit eu minim quis in non.', 'https://via.placeholder.com/400/934/fff/?text=plums', '2020-04-28 05:54:03'),
(10, 1, 'fruits', 'plums', 'Ea est ullamco excepteur aliqua ut. Est tempor irure nulla ut adipisicing culpa cillum reprehenderit. Qui in aliqua elit veniam deserunt Lorem tempor non.', 'https://via.placeholder.com/400/897/fff/?text=plums', '2020-08-09 12:46:33');
