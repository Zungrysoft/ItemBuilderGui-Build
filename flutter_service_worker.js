'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c5e1670a76fa30eb5c8cb1969cb58536",
".git/config": "e4a47bf24590cdf746f0f7dff74611a9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7191cd5b5b63daaf39301be54083d46e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "602b8a37a2a0bef7f4130782b9c5bfe6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "667eff77ad38e903e52659f7dbf2e41b",
".git/logs/refs/heads/master": "667eff77ad38e903e52659f7dbf2e41b",
".git/logs/refs/remotes/origin/master": "33c825ca1501d104e84fb8cabebda1e2",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/9ccfaa533ba166f45e0b441ac42139661f30fe": "00ae8da896fa4e8651c7e29a96986839",
".git/objects/06/0f5875d8e10d0c806c94035f398ef54a9ee650": "62f0f3033fe8c0dc106b106b251b594c",
".git/objects/0e/5dd4376ef658a506001709aa65e804fb424ac9": "fdf47c6ffa2dbd311b407875cb3627f4",
".git/objects/14/aecf6e4a5931a31ea5b37fdb90ee5cc22a0e47": "025152dee122bfea51b7b1e8d143c9e2",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/1e/515ac25b756773548f02176d80b5637889a55d": "843b50f51eac7623283732f8457afba9",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/25/4efb79c0f44167a44d1d57da7bd33ee41aa870": "f742c4141b64e7e53fc7872412986c97",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/30882f89c3d1d388bd7c85bbba5aa2fd003743": "b8e7158de0e6dfa58baadb864dc9fcb4",
".git/objects/42/655473af0de10d77768237eb43ce2775ca90c5": "ec6c6520c25c1f63d3d4167c790a31f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/50/928171cc362fb359e03a6cb641e1c608aa3d60": "3c4d7145b50d40281582531ee7dab049",
".git/objects/51/f2c1fdfd14f6c88321daf217fbf47ab714b373": "449bd7f07825b3132294b22163c7989c",
".git/objects/5c/61aaba3cc3bd3670a7b5e160865db2ad7bd118": "1342122d127c3cb2d5cfb129e11cb366",
".git/objects/66/460f745f156926b730c95e52caf509608136b9": "831d817f573079f59e10590f87516b95",
".git/objects/68/a92c063051022868136b88b1c6167d9eb10e2b": "cc05fe61794e7915e082e5060ea735fe",
".git/objects/6b/288ad57aa291fc08267d72d9c74c359c3a3828": "f691fa54a14b10c28547f6ccc9d689a5",
".git/objects/6f/5f079aef169354d42cde353e2108a6e9e60cb7": "f03ad5412082d780692f926b12b5715d",
".git/objects/76/4466728fd75348f57fbf5f96bd2d849b510dc2": "5b2669c19723da2538c1865935e97a42",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/5d3f6ba89460423fcab41fcf1edf53ac84ca6c": "fa38d9d0025c7fc8d21a0810c8180589",
".git/objects/86/75247d25c17749095e8ce75fc3e6a64647fd05": "4403b06ac6aa70136ff7434be522bda1",
".git/objects/88/3458984c57c54dff1a0a941fd1ecaeab63af33": "a2003bafbb99406efc0dff20b91c71b7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/0d080ac36d4f71475ed1e31b198163b435b291": "7ffa708f289828af3e4dfaa0abd0ebb1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/96/4f9baea57c095e8aad788a16a8c95be6e6aad1": "df6245bbcb35dbffa3ee08363ec27e86",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/70da073b58b972f8597625f03b9430cf8fa877": "4b2a72e075633a529657836be6573d61",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/34bdc84226f44756ccf3e95e4df08a172d21c6": "9e94095fab386f624360965f21e58655",
".git/objects/b2/2febb6c724453557d7e76be387803df01bba26": "246a08b9c500ad968a770dd046d8fa78",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/5cf61b0967ffa6922f18dfcbefae90984308dc": "9fffd572a627129fb9cf3d25bab5026d",
".git/objects/c4/192631f25b34d77a7f159aa0da0e3ae99c4ef4": "546c588f67767790fc70913da1a77878",
".git/objects/c7/bbde0c90dff4c0d7007cfb4d070f369a1a4814": "aea74356cee1645eee682a82c54cb4d6",
".git/objects/d4/70cd471d50e98bed604d5ce95117b7c82141b2": "208579cd721d7684a2f3f427741007e3",
".git/objects/d5/d095583f6121ff3ed20e0a5a646688dca57477": "fa6b8b2c90c0ddd7d2719eeec903d8cd",
".git/objects/dd/3cb9d8b72ab7f0ca26823c4987b406de9cb77a": "1a7b77d31edca534c180414cb294d8e7",
".git/objects/df/dccd257d25f6b619de0bade3475684c0fbe8ab": "112f61b0062a65312d9b2120d2c3f990",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/39ae4fcc660c80df200d292b40de708dd444e4": "1af382c187253f94fecef1bdae4d341e",
".git/objects/eb/a847fe0abea22562a249203deeda8888247247": "7f4f7d524987819dcb63cd013530082d",
".git/objects/f4/f6470203208ca7198692ad50941c8f63bf65a5": "ecb3605d2cb2aa93aa0b891038b406b2",
".git/objects/fa/1e623fa67816fb8cd4a6dcf6e0c4e782c32bfc": "a2f91dcbc31e53a56741f2589501a6f9",
".git/objects/ff/310c6a3036113086a76f0d814d94296631a695": "46aaaccca6110e7bcc3d81658ffbd056",
".git/ORIG_HEAD": "06334889e22f44b500d52984b0ab47e7",
".git/refs/heads/master": "259c66060d55aad56bcb714edbdfbf77",
".git/refs/remotes/origin/master": "259c66060d55aad56bcb714edbdfbf77",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "a343d01e8cc8e460d0526fb92f70b5f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0cf62dd851aaec405904a8e5952be56d",
"/": "0cf62dd851aaec405904a8e5952be56d",
"main.dart.js": "faab5c64bbb56d7a65ba2b53f3061b80",
"manifest.json": "d634a1b3c6e7424c837d2c96a752bea3",
"version.json": "6a19f940fac12b5fefa18ee385cd26f6",
"_config.yml": "d178df8a46be3ea7f599296e24430ce0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
