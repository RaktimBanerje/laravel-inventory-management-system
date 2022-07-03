-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 03, 2022 at 06:02 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel_inventory_management_system_bk`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `salutaion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `middle_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sex` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_display_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_0` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_1` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gst_treatment` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gstin` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pan` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `aadhar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `currency` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `skype` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price_list` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `building_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `street` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locality` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `zip` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `area` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `land_mark` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `latitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `longitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `salutaion`, `first_name`, `middle_name`, `last_name`, `sex`, `company_name`, `customer_display_name`, `email`, `phone_0`, `phone_1`, `gst_treatment`, `gstin`, `pan`, `aadhar`, `currency`, `skype`, `facebook`, `twitter`, `website`, `price_list`, `building_no`, `street`, `country`, `state`, `locality`, `zip`, `area`, `land_mark`, `latitude`, `longitude`, `created_at`, `updated_at`) VALUES
(1, 'Ms.', 'Alfonso', 'Charlotte Rosario', 'Sawyer', 'Male', 'Olsen and Hensley LLC', 'Barclay Carver', 'geqigacyne@mailinator.com', '7894561235', '7894513545', 'Registered Business - Composition', 'Qui ex ut reprehende', 'Nobis ullamco do fac', 'Harum voluptas rerum', 'DOLLAR', 'Ut rerum sapiente ac', 'Est id similique exe', 'Explicabo Tempore', 'https://www.zojukimazo.co', 'Price 1', 'Eum aut tenetur ipsu', 'Qui et est rerum nul', 'Dolorem quasi ipsa', 'Non sed est ex sit', 'Quia illo proident', '84066', 'Sequi fugiat hic ips', 'Veritatis sit dolor', NULL, NULL, '2022-03-01 08:19:54', '2022-03-01 08:19:54'),
(2, 'Mr.', 'Dustin', 'Bruce Guerra', 'Holden', 'Male', 'Bond and Tran Plc', 'Keaton Walters', 'xyxifoqen@mailinator.com', '9903811256', '9903811256', 'Registered Business - Regular', 'Dolores quasi accusa', 'Vel quia exercitatio', 'Molestiae enim volup', 'INR', 'Excepturi eos conse', 'Vitae eos aute ut re', 'Ducimus qui laboris', 'https://www.kumahonowogeci.info', 'Price 3', 'Laudantium quae nih', 'Et nisi velit repreh', 'Magna laboriosam be', 'Aut expedita eu nost', 'Nostrud quia aut rec', '15796', 'Iusto iusto repudian', 'Repellendus Cillum', NULL, NULL, '2022-07-03 10:12:17', '2022-07-03 10:12:17'),
(3, 'Ms.', 'Bethany', 'Patrick Huffman', 'Rose', 'Other', 'Warner Carroll Inc', 'Brody Head', 'bonymud@mailinator.com', '1111111111', '1111111111', 'Registered Business - Regular', 'Enim consectetur occ', 'Atque perspiciatis', 'Id dolores dolorem', 'INR', 'Necessitatibus paria', 'Qui nostrud Nam iure', 'Enim incididunt impe', 'https://www.piliweka.us', 'Price 3', 'Inventore qui quis p', 'Id enim id et velit', 'Eum quidem velit ve', 'Quisquam deserunt qu', 'Doloremque eos repe', '22215', 'Facere architecto il', 'Est ipsum nulla sit', NULL, NULL, '2022-07-03 10:12:52', '2022-07-03 10:12:52');

-- --------------------------------------------------------

--
-- Table structure for table `delivery_partners`
--

CREATE TABLE `delivery_partners` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tel_phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `building_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `street` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locality` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `zip` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `area` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `land_mark` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `latitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `longitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `delivery_partners`
--

INSERT INTO `delivery_partners` (`id`, `name`, `email`, `phone`, `tel_phone`, `website`, `building_no`, `street`, `country`, `state`, `locality`, `zip`, `area`, `land_mark`, `latitude`, `longitude`, `created_at`, `updated_at`) VALUES
(1, 'Martena Garza', 'cysegepol@mailinator.com', '78945612321', '98765432121', 'https://www.qyqoneteh.in', 'Voluptate ad ut rem', 'Est dolorem aliquam', 'Omnis nesciunt tota', 'Ipsa beatae invento', 'Consequatur Quo mai', '78376', 'Officiis debitis ali', 'Eum ex enim perspici', NULL, NULL, '2022-03-04 07:22:25', '2022-03-04 07:22:25'),
(2, 'Alec Walker', 'zuci@mailinator.com', '78945612322', '98765432154', 'https://www.zecerezaquryj.tv', 'Natus doloremque ist', 'Sit dicta voluptate', 'Irure atque autem po', 'Delectus sit a lab', 'Fugiat temporibus iu', '60611', 'Sed minim expedita r', 'Mollitia id nulla a', NULL, NULL, '2022-03-04 07:23:50', '2022-03-04 07:23:50');

-- --------------------------------------------------------

--
-- Table structure for table `delivery_stations`
--

CREATE TABLE `delivery_stations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tel_phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `building_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `street` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locality` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `zip` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `area` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `land_mark` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `latitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `longitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `delivery_stations`
--

INSERT INTO `delivery_stations` (`id`, `name`, `email`, `phone`, `tel_phone`, `building_no`, `street`, `country`, `state`, `locality`, `zip`, `area`, `land_mark`, `latitude`, `longitude`, `created_at`, `updated_at`) VALUES
(1, 'Nayda Rosa', 'viwajalasi@mailinator.com', '78945612321', '32165498787', 'Consequatur cillum', 'Molestiae doloribus', 'Nobis deserunt et qu', 'Dicta sed in harum a', 'Eligendi sit vel es', '25993', 'Minus incidunt sed', 'Ea accusamus neque v', 'Perspiciatis dolore', 'Qui asperiores nostr', '2022-03-04 07:22:55', '2022-03-04 07:22:55');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `parent_id` bigint(20) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `unit` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cost_price` double(8,2) DEFAULT NULL,
  `dimensions` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `weight` double(8,2) DEFAULT NULL,
  `manufacturer` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `brand` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sku` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `upc` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ean` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mpn` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isbn` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `has_attributes` tinyint(1) NOT NULL DEFAULT 0,
  `composites` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `parent_id`, `name`, `description`, `unit`, `cost_price`, `dimensions`, `weight`, `manufacturer`, `brand`, `sku`, `upc`, `ean`, `mpn`, `isbn`, `has_attributes`, `composites`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Helen Mooney', 'Natus ducimus omnis', 'KG', 722.00, 'Voluptas magnam recu', 20.00, 'Voluptates sit quis', 'Laudantium saepe cu', 'SKU-ABC-01', 'Quis qui ipsum mole', 'Dolore facilis facer', 'Accusantium non aut', 'Ut obcaecati eum aut', 0, NULL, '2022-03-01 08:27:25', '2022-03-01 08:27:25'),
(3, NULL, 'Jonah Moreno', 'Vel deserunt volupta', 'BOX', 254.00, 'Aut est aliquip in', 45.00, 'Ut ut nesciunt in q', 'Molestiae numquam vo', 'SKU-DFS-02', 'Impedit beatae volu', 'Consequatur rerum eu', 'Consequat Nisi laud', 'Doloremque nulla mod', 0, NULL, '2022-03-01 09:23:57', '2022-03-01 09:23:57'),
(4, NULL, 'Lara Nichols', 'Nulla sint quod nece', 'BOX', 488.00, 'Qui officia iusto un', 98.00, 'Voluptas corrupti o', 'Hic necessitatibus r', 'SKU_UYT-11', 'A hic saepe quis vol', 'Vero animi Nam exce', 'Eos consequatur har', 'Id laboris irure est', 0, NULL, '2022-03-01 09:41:19', '2022-03-01 09:41:19'),
(5, NULL, 'sadsad', 'asfsaf', NULL, NULL, NULL, NULL, NULL, 'asfafas', NULL, NULL, NULL, NULL, NULL, 1, NULL, '2022-03-04 12:16:44', '2022-03-04 12:16:44'),
(6, 5, 'asdsad', 'asfasf', 'PIECE', 4545.00, 'asfasf', 89787.00, 'asfsaf', NULL, 'SKU-RED-98', 'afaf', 'asfasf', 'asfasf', 'asfaf', 0, NULL, '2022-03-04 12:16:44', '2022-03-04 12:16:44'),
(11, NULL, 'Tyler Hobbs', 'Hic dolorum minim ex', NULL, NULL, NULL, NULL, NULL, 'Labore dolores est i', NULL, NULL, NULL, NULL, NULL, 1, NULL, '2022-03-05 03:08:26', '2022-03-05 03:08:26'),
(12, 11, 'Imelda Cole', 'Dignissimos aperiam', 'LITER', 608.00, 'Fugiat fuga Qui si', 8.00, 'Voluptas ducimus ad', NULL, 'SKU-POU-04', 'Alias quis ex qui om', 'Et quo in officiis f', 'Repellendus Autem e', 'Nesciunt qui quia q', 0, NULL, '2022-03-05 03:08:26', '2022-03-05 03:08:26'),
(13, NULL, 'Kenneth Porter', 'Ex in sint et qui e', 'GM', 395.00, 'Error sed sit in rep', 98.00, 'Veniam nihil pariat', 'Quas esse commodo qu', 'SK-JH-123', 'Corporis proident e', 'Ipsum est deleniti', 'Nihil in earum molli', 'Eiusmod sit quos vol', 0, NULL, '2022-03-07 03:49:24', '2022-03-07 03:49:24'),
(14, NULL, 'Lance Wood', 'Ex laborum dolore au', NULL, NULL, NULL, NULL, NULL, 'Proident labore et', NULL, NULL, NULL, NULL, NULL, 1, NULL, '2022-03-07 03:50:02', '2022-03-07 03:50:02'),
(15, 14, 'Louis Carroll', 'Exercitationem omnis', 'BOX', 394.00, 'Sed ex aliqua Labor', 82.00, 'Lorem optio sint ve', NULL, 'SKU-RED-01', 'Pariatur Dolore del', 'Nisi ipsam temporibu', 'Et assumenda sed lab', 'Eiusmod ad exercitat', 0, NULL, '2022-03-07 03:50:02', '2022-03-07 03:50:02'),
(16, 14, 'Garrett Parrish', 'Iure aliquid tenetur', 'PIECE', 143.00, 'Eu enim voluptatem', 3.00, 'Autem tempor volupta', NULL, 'SKU-GREEN-01', 'Nihil cupiditate ut', 'Voluptatem sequi acc', 'Tempor et accusamus', 'Porro ipsum repudia', 0, NULL, '2022-03-07 03:50:02', '2022-03-07 03:50:02');

-- --------------------------------------------------------

--
-- Table structure for table `item_variations`
--

CREATE TABLE `item_variations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `item_id` bigint(20) UNSIGNED NOT NULL,
  `attribute` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `item_variations`
--

INSERT INTO `item_variations` (`id`, `item_id`, `attribute`, `value`, `created_at`, `updated_at`) VALUES
(1, 6, 'Color', 'Red', '2022-03-04 12:16:44', '2022-03-04 12:16:44'),
(2, 6, 'Size', 'XL', '2022-03-04 12:16:44', '2022-03-04 12:16:44'),
(3, 12, 'Erich Benson', 'Voluptatem Officia', '2022-03-05 03:08:26', '2022-03-05 03:08:26'),
(4, 15, 'Brielle Oneal', 'Totam aut qui evenie', '2022-03-07 03:50:02', '2022-03-07 03:50:02'),
(5, 15, 'Armand Holcomb', 'Optio voluptatem al', '2022-03-07 03:50:02', '2022-03-07 03:50:02'),
(6, 16, 'Brielle Oneal', 'Totam aut qui evenie', '2022-03-07 03:50:02', '2022-03-07 03:50:02'),
(7, 16, 'Armand Holcomb', 'Optio voluptatem al', '2022-03-07 03:50:02', '2022-03-07 03:50:02');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_02_01_102933_create_customers_table', 1),
(6, '2022_02_07_153124_create_items_table', 1),
(7, '2022_02_10_175918_create_item_variations_table', 1),
(8, '2022_02_12_163618_create_warehouses_table', 1),
(9, '2022_02_15_190439_create_vendors_table', 1),
(10, '2022_02_16_143337_create_purchase_orders_table', 1),
(11, '2022_02_18_123758_create_purchase_order_items_table', 1),
(18, '2022_03_01_080650_create_delivery_stations_table', 2),
(19, '2022_03_01_080651_create_delivery_partners_table', 2),
(26, '2022_03_01_080651_create_tracks_table', 3),
(27, '2022_03_01_080652_create_track_details_table', 3),
(28, '2022_04_28_121235_create_sale_orders_table', 3),
(29, '2022_04_28_121329_create_sale_order_items_table', 3),
(34, '2022_02_10_175919_create_stocks_table', 4);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `purchase_orders`
--

CREATE TABLE `purchase_orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `vendor_id` bigint(20) UNSIGNED NOT NULL,
  `warehouse_id` bigint(20) UNSIGNED DEFAULT NULL,
  `customer_id` bigint(20) UNSIGNED DEFAULT NULL,
  `price` double(8,2) NOT NULL,
  `shipping_building_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping_street` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping_country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping_state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping_locality` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping_zip` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping_area` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping_land_mark` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `shipping_latitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `shipping_longitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `purchase_orders`
--

INSERT INTO `purchase_orders` (`id`, `vendor_id`, `warehouse_id`, `customer_id`, `price`, `shipping_building_no`, `shipping_street`, `shipping_country`, `shipping_state`, `shipping_locality`, `shipping_zip`, `shipping_area`, `shipping_land_mark`, `shipping_latitude`, `shipping_longitude`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 1, NULL, 1040.00, 'Dolore tempore eos', 'Temporibus architect', 'Adipisicing esse ve', 'Magna cumque tempori', 'Et eligendi nulla id', '10650', 'Fugit doloribus vel', 'Eu dicta aute vel fu', NULL, NULL, '2022-03-01 10:00:56', '2022-03-01 10:00:56', NULL),
(2, 1, NULL, 1, 10000.00, 'Eum aut tenetur ipsu', 'Qui et est rerum nul', 'Dolorem quasi ipsa', 'Non sed est ex sit', 'Quia illo proident', '84066', 'Sequi fugiat hic ips', 'Veritatis sit dolor', NULL, NULL, '2022-03-08 01:49:24', '2022-03-08 01:49:24', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `purchase_order_items`
--

CREATE TABLE `purchase_order_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `purchase_order_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `unit_price` double(8,2) NOT NULL,
  `amount` double(8,2) NOT NULL,
  `gst` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `purchase_order_items`
--

INSERT INTO `purchase_order_items` (`id`, `purchase_order_id`, `name`, `quantity`, `unit_price`, `amount`, `gst`, `created_at`, `updated_at`) VALUES
(1, 1, 'A', 4, 10.00, 40.00, 'DADA-545', '2022-03-01 10:00:56', '2022-03-01 10:00:56'),
(2, 1, 'B', 100, 10.00, 1000.00, 'ADAFAS-ASFA', '2022-03-01 10:00:56', '2022-03-01 10:00:56'),
(3, 2, 'A', 100, 100.00, 10000.00, 'DADFA-97', '2022-03-08 01:49:24', '2022-03-08 01:49:24');

-- --------------------------------------------------------

--
-- Table structure for table `sale_orders`
--

CREATE TABLE `sale_orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `customer_id` bigint(20) UNSIGNED NOT NULL,
  `track_id` bigint(20) UNSIGNED NOT NULL,
  `price` double(8,2) NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'PENDING',
  `shipping_building_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping_street` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping_country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping_state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping_locality` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping_zip` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping_area` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping_land_mark` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `shipping_latitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `shipping_longitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `delivery_at` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sale_orders`
--

INSERT INTO `sale_orders` (`id`, `customer_id`, `track_id`, `price`, `status`, `shipping_building_no`, `shipping_street`, `shipping_country`, `shipping_state`, `shipping_locality`, `shipping_zip`, `shipping_area`, `shipping_land_mark`, `shipping_latitude`, `shipping_longitude`, `delivery_at`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 101000.00, 'SUCCESS', 'Eum aut tenetur ipsu', 'Qui et est rerum nul', 'Dolorem quasi ipsa', 'Non sed est ex sit', 'Quia illo proident', '84066', 'Sequi fugiat hic ips', 'Veritatis sit dolor', NULL, NULL, NULL, '2022-03-11 08:13:41', '2022-03-04 08:13:41'),
(2, 1, 2, 0.00, 'PENDING', 'Eum aut tenetur ipsu', 'Qui et est rerum nul', 'Dolorem quasi ipsa', 'Non sed est ex sit', 'Quia illo proident', '84066', 'Sequi fugiat hic ips', 'Veritatis sit dolor', NULL, NULL, NULL, '2022-03-08 08:18:33', '2022-03-04 08:18:33'),
(3, 1, 3, 0.00, 'PENDING', 'Eum aut tenetur ipsu', 'Qui et est rerum nul', 'Dolorem quasi ipsa', 'Non sed est ex sit', 'Quia illo proident', '84066', 'Sequi fugiat hic ips', 'Veritatis sit dolor', NULL, NULL, NULL, '2022-03-04 08:23:53', '2022-03-04 08:23:53'),
(4, 1, 5, 90.00, 'PENDING', 'Eum aut tenetur ipsu', 'Qui et est rerum nul', 'Dolorem quasi ipsa', 'Non sed est ex sit', 'Quia illo proident', '84066', 'Sequi fugiat hic ips', 'Veritatis sit dolor', NULL, NULL, NULL, '2022-04-03 06:48:19', '2022-04-03 06:48:19'),
(5, 1, 6, 90.00, 'PENDING', 'Eum aut tenetur ipsu', 'Qui et est rerum nul', 'Dolorem quasi ipsa', 'Non sed est ex sit', 'Quia illo proident', '84066', 'Sequi fugiat hic ips', 'Veritatis sit dolor', NULL, NULL, NULL, '2022-04-03 06:48:40', '2022-04-03 06:48:40'),
(6, 1, 7, 48.00, 'PENDING', 'Eum aut tenetur ipsu', 'Qui et est rerum nul', 'Dolorem quasi ipsa', 'Non sed est ex sit', 'Quia illo proident', '84066', 'Sequi fugiat hic ips', 'Veritatis sit dolor', NULL, NULL, NULL, '2022-04-03 06:49:19', '2022-04-03 06:49:19'),
(7, 1, 8, 800.00, 'PENDING', 'Eum aut tenetur ipsu', 'Qui et est rerum nul', 'Dolorem quasi ipsa', 'Non sed est ex sit', 'Quia illo proident', '84066', 'Sequi fugiat hic ips', 'Veritatis sit dolor', NULL, NULL, NULL, '2022-04-05 06:49:33', '2022-04-05 06:49:33');

-- --------------------------------------------------------

--
-- Table structure for table `sale_order_items`
--

CREATE TABLE `sale_order_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sale_order_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `unit_price` double(8,2) NOT NULL,
  `quantity` int(11) NOT NULL,
  `amount` double(8,2) NOT NULL,
  `gst` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sale_order_items`
--

INSERT INTO `sale_order_items` (`id`, `sale_order_id`, `name`, `unit_price`, `quantity`, `amount`, `gst`, `created_at`, `updated_at`) VALUES
(1, 1, 'A', 100.00, 10, 1000.00, 'AFAFASF', '2022-03-04 08:13:41', '2022-03-04 08:13:41'),
(2, 1, 'B', 1000.00, 100, 100000.00, 'AFAF-88578', '2022-03-04 08:13:41', '2022-03-04 08:13:41'),
(3, 5, 'Lara Nichols', 9.00, 10, 90.00, 'PKJM455', '2022-04-03 06:48:40', '2022-04-03 06:48:40'),
(4, 6, 'Jonah Moreno', 6.00, 8, 48.00, 'kf-575', '2022-04-03 06:49:19', '2022-04-03 06:49:19'),
(5, 7, 'Jonah Moreno', 40.00, 20, 800.00, 'qDASDFSAF', '2022-04-05 06:49:33', '2022-04-05 06:49:33');

-- --------------------------------------------------------

--
-- Table structure for table `stocks`
--

CREATE TABLE `stocks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `item_id` bigint(20) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL,
  `batch` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cost_price` double(8,2) NOT NULL,
  `mfg_at` datetime NOT NULL,
  `exp_at` datetime NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `stocks`
--

INSERT INTO `stocks` (`id`, `item_id`, `quantity`, `batch`, `cost_price`, `mfg_at`, `exp_at`, `created_at`, `updated_at`) VALUES
(1, 3, 740, 'Magnam ut Nam non qu', 43.54, '2004-03-11 00:00:00', '1993-03-07 00:00:00', '2022-04-05 06:15:24', '2022-04-05 06:15:24'),
(2, 16, 764, 'Aliquip voluptas sed', 653.00, '1975-12-12 00:00:00', '1977-08-06 00:00:00', '2022-04-05 06:15:45', '2022-04-05 06:15:45');

-- --------------------------------------------------------

--
-- Table structure for table `tracks`
--

CREATE TABLE `tracks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `delivery_partner_id` bigint(20) UNSIGNED DEFAULT NULL,
  `tracking_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tracking_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tracks`
--

INSERT INTO `tracks` (`id`, `delivery_partner_id`, `tracking_id`, `tracking_link`, `created_at`, `updated_at`) VALUES
(1, NULL, NULL, NULL, '2022-03-04 08:13:41', '2022-03-04 08:13:41'),
(2, NULL, NULL, NULL, '2022-03-04 08:18:33', '2022-03-04 08:18:33'),
(3, NULL, NULL, NULL, '2022-03-04 08:23:53', '2022-03-04 08:23:53'),
(4, NULL, NULL, NULL, '2022-04-03 06:48:02', '2022-04-03 06:48:02'),
(5, NULL, NULL, NULL, '2022-04-03 06:48:19', '2022-04-03 06:48:19'),
(6, NULL, NULL, NULL, '2022-04-03 06:48:40', '2022-04-03 06:48:40'),
(7, NULL, NULL, NULL, '2022-04-03 06:49:19', '2022-04-03 06:49:19'),
(8, NULL, NULL, NULL, '2022-04-05 06:49:33', '2022-04-05 06:49:33');

-- --------------------------------------------------------

--
-- Table structure for table `track_details`
--

CREATE TABLE `track_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `track_id` bigint(20) UNSIGNED NOT NULL,
  `delivery_station_id` bigint(20) UNSIGNED NOT NULL,
  `leaved_at` datetime NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vendors`
--

CREATE TABLE `vendors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `company_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_0` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gst_treatment` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price_list` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `currency` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `building_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `street` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locality` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `zip` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `area` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `land_mark` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `latitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `longitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `vendors`
--

INSERT INTO `vendors` (`id`, `company_name`, `display_name`, `email`, `phone_0`, `phone_1`, `gst_treatment`, `price_list`, `currency`, `building_no`, `street`, `country`, `state`, `locality`, `zip`, `area`, `land_mark`, `latitude`, `longitude`, `created_at`, `updated_at`) VALUES
(1, 'Brennan Baker Inc', 'Shad Petersen', 'kepuzyqele@mailinator.com', '9876542315', '7894561235', 'Registered Business - Regular', 'Price 1', 'DOLLAR', 'Enim irure magni lab', 'A est nisi natus quo', 'In nulla quas sed in', 'Officiis provident', 'Veniam libero quos', '35477', 'Recusandae Quidem n', 'Incididunt quia nost', 'Recusandae Iste dol', 'Debitis voluptate la', '2022-03-01 08:22:26', '2022-03-01 08:22:26');

-- --------------------------------------------------------

--
-- Table structure for table `warehouses`
--

CREATE TABLE `warehouses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tel_phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `building_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `street` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locality` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `zip` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `area` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `land_mark` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `latitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `longitude` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `warehouses`
--

INSERT INTO `warehouses` (`id`, `name`, `email`, `phone`, `tel_phone`, `building_no`, `street`, `country`, `state`, `locality`, `zip`, `area`, `land_mark`, `latitude`, `longitude`, `created_at`, `updated_at`) VALUES
(1, 'Chiquita Mcgee', 'cufyfipev@mailinator.com', '1234567885', '98765432158', 'Dolore tempore eos', 'Temporibus architect', 'Adipisicing esse ve', 'Magna cumque tempori', 'Et eligendi nulla id', '10650', 'Fugit doloribus vel', 'Eu dicta aute vel fu', 'Ut earum dolor volup', 'Ad reprehenderit ab', '2022-03-01 08:21:44', '2022-03-01 08:21:44'),
(2, 'Xena Shepard', 'kedu@mailinator.com', '1324567898', '7894561232', 'Dolorem pariatur Bl', 'Sit aliquam pariatu', 'Deserunt officia ess', 'Sunt hic quis qui p', 'Perferendis laborum', '86864', 'Consequatur Soluta', 'Dolore vero excepteu', 'Magnam adipisci maio', 'Consequatur dolore b', '2022-03-01 09:41:53', '2022-03-01 09:41:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `customers_pan_unique` (`pan`),
  ADD UNIQUE KEY `customers_aadhar_unique` (`aadhar`);

--
-- Indexes for table `delivery_partners`
--
ALTER TABLE `delivery_partners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `delivery_stations`
--
ALTER TABLE `delivery_stations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `items_name_unique` (`name`),
  ADD UNIQUE KEY `items_sku_unique` (`sku`),
  ADD UNIQUE KEY `items_upc_unique` (`upc`),
  ADD UNIQUE KEY `items_ean_unique` (`ean`),
  ADD UNIQUE KEY `items_mpn_unique` (`mpn`),
  ADD UNIQUE KEY `items_isbn_unique` (`isbn`);

--
-- Indexes for table `item_variations`
--
ALTER TABLE `item_variations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `item_variations_item_id_foreign` (`item_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `purchase_orders`
--
ALTER TABLE `purchase_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `purchase_orders_vendor_id_foreign` (`vendor_id`),
  ADD KEY `purchase_orders_warehouse_id_foreign` (`warehouse_id`),
  ADD KEY `purchase_orders_customer_id_foreign` (`customer_id`);

--
-- Indexes for table `purchase_order_items`
--
ALTER TABLE `purchase_order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `purchase_order_items_purchase_order_id_foreign` (`purchase_order_id`);

--
-- Indexes for table `sale_orders`
--
ALTER TABLE `sale_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sale_orders_customer_id_foreign` (`customer_id`),
  ADD KEY `sale_orders_track_id_foreign` (`track_id`);

--
-- Indexes for table `sale_order_items`
--
ALTER TABLE `sale_order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sale_order_items_sale_order_id_foreign` (`sale_order_id`);

--
-- Indexes for table `stocks`
--
ALTER TABLE `stocks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `stocks_item_id_foreign` (`item_id`);

--
-- Indexes for table `tracks`
--
ALTER TABLE `tracks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tracks_delivery_partner_id_foreign` (`delivery_partner_id`);

--
-- Indexes for table `track_details`
--
ALTER TABLE `track_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `track_details_track_id_foreign` (`track_id`),
  ADD KEY `track_details_delivery_station_id_foreign` (`delivery_station_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `vendors`
--
ALTER TABLE `vendors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `warehouses`
--
ALTER TABLE `warehouses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `warehouses_name_unique` (`name`),
  ADD UNIQUE KEY `warehouses_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `delivery_partners`
--
ALTER TABLE `delivery_partners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `delivery_stations`
--
ALTER TABLE `delivery_stations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `item_variations`
--
ALTER TABLE `item_variations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `purchase_orders`
--
ALTER TABLE `purchase_orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `purchase_order_items`
--
ALTER TABLE `purchase_order_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sale_orders`
--
ALTER TABLE `sale_orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `sale_order_items`
--
ALTER TABLE `sale_order_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `stocks`
--
ALTER TABLE `stocks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tracks`
--
ALTER TABLE `tracks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `track_details`
--
ALTER TABLE `track_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vendors`
--
ALTER TABLE `vendors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `warehouses`
--
ALTER TABLE `warehouses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `item_variations`
--
ALTER TABLE `item_variations`
  ADD CONSTRAINT `item_variations_item_id_foreign` FOREIGN KEY (`item_id`) REFERENCES `items` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `purchase_orders`
--
ALTER TABLE `purchase_orders`
  ADD CONSTRAINT `purchase_orders_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `purchase_orders_vendor_id_foreign` FOREIGN KEY (`vendor_id`) REFERENCES `vendors` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `purchase_orders_warehouse_id_foreign` FOREIGN KEY (`warehouse_id`) REFERENCES `warehouses` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `purchase_order_items`
--
ALTER TABLE `purchase_order_items`
  ADD CONSTRAINT `purchase_order_items_purchase_order_id_foreign` FOREIGN KEY (`purchase_order_id`) REFERENCES `purchase_orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sale_orders`
--
ALTER TABLE `sale_orders`
  ADD CONSTRAINT `sale_orders_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `sale_orders_track_id_foreign` FOREIGN KEY (`track_id`) REFERENCES `tracks` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `sale_order_items`
--
ALTER TABLE `sale_order_items`
  ADD CONSTRAINT `sale_order_items_sale_order_id_foreign` FOREIGN KEY (`sale_order_id`) REFERENCES `sale_orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `stocks`
--
ALTER TABLE `stocks`
  ADD CONSTRAINT `stocks_item_id_foreign` FOREIGN KEY (`item_id`) REFERENCES `items` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `tracks`
--
ALTER TABLE `tracks`
  ADD CONSTRAINT `tracks_delivery_partner_id_foreign` FOREIGN KEY (`delivery_partner_id`) REFERENCES `delivery_partners` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `track_details`
--
ALTER TABLE `track_details`
  ADD CONSTRAINT `track_details_delivery_station_id_foreign` FOREIGN KEY (`delivery_station_id`) REFERENCES `delivery_stations` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `track_details_track_id_foreign` FOREIGN KEY (`track_id`) REFERENCES `tracks` (`id`) ON UPDATE CASCADE;
SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
