---
source_path: "documentation/AVFoundation/avassetreader/init-asset.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetreader/init-asset"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initasset:0000:0001">init(asset:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initasset:0001:0001">**Framework**: AVFoundation **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initasset:0002:0001">에셋에서 미디어 데이터를 읽는 객체를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initasset:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initasset:0004:0001">iOS 4.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:initasset:0004:0002">iPadOS 4.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:initasset:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:initasset:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:initasset:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initasset:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(asset: AVAsset) throws
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>output</code>: The capture output object.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0010:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptureaudiodataoutputsamplebufferdelegate/captureoutput(_:didoutput:from:">View on Apple Developer</a>)*</span>
