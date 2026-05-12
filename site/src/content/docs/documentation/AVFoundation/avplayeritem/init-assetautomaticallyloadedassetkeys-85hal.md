---
source_path: "documentation/AVFoundation/avplayeritem/init-assetautomaticallyloadedassetkeys-85hal.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritem/init-assetautomaticallyloadedassetkeys-85hal"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initassetautomaticallyloadedassetkeys:0000:0001">init(asset:automaticallyLoadedAssetKeys:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initassetautomaticallyloadedassetkeys:0001:0001">**Framework**: AVFoundation **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initassetautomaticallyloadedassetkeys:0002:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initassetautomaticallyloadedassetkeys:0003:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initassetautomaticallyloadedassetkeys:0003:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initassetautomaticallyloadedassetkeys:0003:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initassetautomaticallyloadedassetkeys:0003:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initassetautomaticallyloadedassetkeys:0003:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initassetautomaticallyloadedassetkeys:0003:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initassetautomaticallyloadedassetkeys:0003:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0004:0001">Declaration</span>

```swift
nonisolated
convenience init(asset: any AVAsset & Sendable, automaticallyLoadedAssetKeys: [AVPartialAsyncProperty<AVAsset>])
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0006:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0001"><a href="avplayeritem/init(url:">convenience init(url: URL)</a>-1xrtk.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0008:0001">지정된 URL로 플레이어 항목을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0009:0001"><a href="avplayeritem/init(asset:">convenience init(asset: AVAsset)</a>-87rjl.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0010:0001">지정된 asset에 대한 플레이어 항목을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avplayeritem/init(asset:">convenience init(asset: any AVAsset &amp; Sendable)</a>-1nme9.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0002">[convenience init(asset: AVAsset, automaticallyLoadedAssetKeys: [AVPartialAsyncProperty&lt;AVAsset&gt;])](avplayeritem/init(asset:automaticallyloadedassetkeys:)-5czjh.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">asset에 대한 플레이어 항목을 생성하고 지정된 속성의 값을 자동으로 로드합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001">[init(asset: AVAsset, automaticallyLoadedAssetKeys: [String]?)](avplayeritem/init(asset:automaticallyloadedassetkeys:)-8x4.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">지정된 asset와 자동으로 로드할 asset 키를 사용해 플레이어 항목을 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritem/init(asset:automaticallyloadedassetkeys:">Apple Developer에서 보기</a>-85hal)*</span>
