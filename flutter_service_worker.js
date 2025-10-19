'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2560fdc47dde7b99c25a67598b235549",
"version.json": "b163b0fb061322adb7fc8718cac39250",
"index.html": "b22fbb944469b9fecd327545b5aec927",
"/": "b22fbb944469b9fecd327545b5aec927",
"main.dart.js": "bf12ef1ea2b10e7af1a3d3004c3b7ea6",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".github/workflows/static.yml": "6dece455dc91e6f867499fabc7ac5be9",
"manifest.json": "1a74453066817e0da4a1923cca624586",
".git/ORIG_HEAD": "0b8899ee58fd1173420be6703bd5f4f8",
".git/config": "b8f91dfe71818b7d2741134496e3996d",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/6a/e03bef73ca960ad806e80b120adf9aa201983b": "799218ba569214e6da1c3659b9e16ed5",
".git/objects/51/25535188ba07ff1eabdff239a2745a5a325e26": "9fabae75bb827018973cb83196b8d270",
".git/objects/93/429456143a460598c30748e536f631a6f1463c": "cbd9a9cb248caba9fcfeed64a4ca0d2f",
".git/objects/0e/47b92a0d3fab6f2d4b8565f978269205ca7cb1": "c543c11ac8d4d216270ce683c4a89a83",
".git/objects/34/ec3fc8484e7a5099ab34d3b2b3c925869458d3": "b0801b6f1f6437a0df91aa51aa0a6c7b",
".git/objects/05/0bd0eda7caec98fe59cc8a3de99da6d8e1303c": "ca849c438b727c039d51b9efd61ac3c4",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/be/75fe3313d957083c838077d2b2667442fed987": "2dd4ece5e812e0ccbcf969b43e3bb379",
".git/objects/da/18da8ca261875e6f066a6dedca9a46e60ce8fd": "45087ac7f81986a1e29aa75eb34ac1b3",
".git/objects/a2/e3a0af5800e73d8a6503a7213e01e502db33a1": "e267e16a20f1453be26521a90e86d703",
".git/objects/d6/4286995024675ce7e2eec01ee028d36bc20a71": "c761b944d43a0450ae6db4fafcc3eaf4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/351d487a9f531f8f9b837e98b42a7dd35ab3b7": "0122b64d39395be3df75e29420616696",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/8caf105080db777db5c9985df6a80a1186e944": "c2c73dc8b4881d3f9c009484ec0b46be",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c9e97c91d0ca32002d6eba53cf1981031047bb": "05d147ca28fabf58f251c18d62f64056",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/18/bc3110075e1a8ae9594d19042a63c0a8650b55": "889c2545339036345926326f017eef4c",
".git/objects/1f/0a0e156ce5cf106d9152b1dc92054e266b3475": "68653c2ad6a5e0c45647450342916f7a",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/6314f3139e65ea8ce604c1423c9612cc98a441": "9583832b470246c6782a2af11a8b73cd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/5d42ec1d0706a6b1ecd1a930dbbeea673245a6": "0264d550bed6b2c0773d75c7cb77b6af",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/31/7cf03057842f9cea9fe1a355a01b8b53faf27d": "bb4f0f308f6ccd9c1498b62855be1f24",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5b/9f8f934ec634f20b0f3e7fd14385e41606ffaf": "518b745c6ecae74da72d763974601627",
".git/objects/52/77988e9e3027b6ec17d0025eed9ab699c0c37b": "d307e762379a3f3a3c66d898ef834005",
".git/objects/d3/a90a6b560df95de04050dc6c9c8f006da3b0ee": "b7fc2ebc20ee9a5166d8790ee7eefade",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/e88c79d3b3edc49b91b9e720cdef02d954a604": "fb43af046e93d3f22d69714d99e11bbb",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/d5/e5b21ccf467d2404ec9c0c287197326b54fe00": "b87eb5b77680c93270f62e3720a4499a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/e2deb35c17fdac506ca32935aaa6a79156c964": "a0503e7d441334c90d3d06e7dfad3214",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/77fed07bfee1f5bcb62d334d348a98f5d41684": "9ca62365b784ffc71970e2697d218e3f",
".git/objects/cb/9f4d55176d22b69b1f8c11365eccfd6ddb8852": "084f8bf17acadd23159a6f9f6c0638ed",
".git/objects/f8/970a3217da23e9932d9db5b02158176c4bee43": "891045195fb8d6220b1186c98859f075",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/2d/aae9a6bab8523356aa8e0fbec784422293ec90": "b3fb0cdbcb7a930bf6dddd65efae24d4",
".git/objects/83/20e282a4ef451b93219b63e18c3b857d36c513": "261993085b409420da933d9e8b050a57",
".git/objects/1b/6539fcbc4eb5062b735a88ae484e82b6b7ad27": "4836b2e9968f315502613cc833c3bce3",
".git/objects/48/08ca816edb1866e74147aced644e04bbf0f64d": "2f03d55e7eac82f21e8c8e2a2f26c5e8",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/84/e7fa307db664e80011e290c5e9c046e541258e": "33741717b30275ba80261349bee07e96",
".git/objects/15/406d3ab474671719eeacd55e99f92355b2e426": "8f94c439b7de83bbf096054698f6d16e",
".git/objects/15/6b66d142238b00065f71bff6f462fe1a5bbcc7": "8bc3236d0432feea9e8bd0a77bfe0708",
".git/objects/85/dd1943c309d09f690f32a325d8621cadacabf9": "f40817af1db416bad2520af0ad87591e",
".git/objects/1c/0ddbb848f9c14515ae6b8c3e46609d0ad6f874": "8ebe3f9bb20e207318052a1df6a037f4",
".git/objects/7a/1d495b2d97893f5685d759b4fc0f7576a14c34": "0bf88a837bc5d24d7a0d6c83e54bff26",
".git/objects/22/3b858b2bf142925495f2b2f2f9cddefb4f5f00": "30cc26b59bdd6e6c920d686d8cc9d241",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3c2e576dc30b3a231c21bb581cf5d4e7",
".git/logs/refs/heads/main": "3c2e576dc30b3a231c21bb581cf5d4e7",
".git/logs/refs/remotes/origin/main": "8a2cffd2b7da1352d8ff895b0f27ac82",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "25231e2ac4e050198a657780c30b6689",
".git/refs/remotes/origin/main": "872d6c173c59e1db048393ba54d2ce2a",
".git/index": "8b9d0e3c63d3771e637058bb69002f11",
".git/COMMIT_EDITMSG": "46b73951093604d734aae668d12f9149",
".git/FETCH_HEAD": "eda17071adcc6633b5dea603b490234c",
"assets/AssetManifest.json": "aa1375c1958e1724fac0a2e3e76d81be",
"assets/NOTICES": "52b9b3857074fe65320e4bfb47655cbb",
"assets/FontManifest.json": "7e3fb5bf310bce7833ac2bf6e314e26d",
"assets/AssetManifest.bin.json": "b287f57804407e8a8560844153e0fee8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a3b138fafc6f3078ed6ec2d5531798ea",
"assets/fonts/MaterialIcons-Regular.otf": "b48544329f89794cd8aa33d2609fd9ab",
"assets/assets/images/ubaid.jpeg": "0c79aaea93e0ff960197269eeda28f55",
"assets/assets/images/ima3.svg": "273d3f6e0ae0b53eecd032b2002543ea",
"assets/assets/images/image.svg": "e415937dfefb0e800259ec84c90cb091",
"assets/assets/images/logo.png": "10347271fec0612799335b2d6d90e6dd",
"assets/assets/images/pic.jpg": "ce94d53e681a214e31a1c60ab11cab70",
"assets/assets/images/image.png": "7d3fa06dc2abd985ca26701f9b5bbcee",
"assets/assets/fonts/Edu.ttf": "7d52f4533a43a4867c2e2391e2ffed05",
"assets/assets/fonts/Edu_Bold.ttf": "838da8a5d5595515c69fcbf14d5ec7c6",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
