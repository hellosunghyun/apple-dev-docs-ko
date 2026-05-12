---
source_path: "documentation/AVFoundation/avurlasset/assetcache.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avurlasset/assetcache"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:assetcache:0000:0001">assetCache</span>

<span class="ko-segment" data-segment-id="seg:paragraph:assetcache:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:assetcache:0002:0001">에셋의 연관된 에셋 캐시(있는 경우)입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:assetcache:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:assetcache:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:assetcache:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:assetcache:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:assetcache:0004:0004">macOS 10.12+</span>
- <span class="ko-segment" data-segment-id="seg:list:assetcache:0004:0005">tvOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:assetcache:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var assetCache: AVAssetCache? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성은 로컬에 캐시된 미디어 데이터를 검사할 때 사용할 수 있는 <a href="avassetcache.md">@@TOKEN_0@@</a> 인스턴스에 대한 접근을 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 속성의 값은 자산을 디스크에서 미디어 데이터를 저장하거나 접근하도록 구성하지 않은 경우 <code>nil</code>입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avurlasset/assetcache">View on Apple Developer</a>*</span>
