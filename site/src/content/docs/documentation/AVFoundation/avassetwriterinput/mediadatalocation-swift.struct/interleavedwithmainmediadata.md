---
source_path: "documentation/AVFoundation/avassetwriterinput/mediadatalocation-swift.struct/interleavedwithmainmediadata.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetwriterinput/mediadatalocation-swift.struct/interleavedwithmainmediadata"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:interleavedwithmainmediadata:0000:0001">interleavedWithMainMediaData</span>

<span class="ko-segment" data-segment-id="seg:paragraph:interleavedwithmainmediadata:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:interleavedwithmainmediadata:0002:0001">입력 미디어 데이터를 다른 미디어 데이터와 인터리브하도록 지정하는 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:interleavedwithmainmediadata:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:interleavedwithmainmediadata:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:interleavedwithmainmediadata:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:interleavedwithmainmediadata:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:interleavedwithmainmediadata:0004:0004">macOS 10.13+</span>
- <span class="ko-segment" data-segment-id="seg:list:interleavedwithmainmediadata:0004:0005">tvOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:interleavedwithmainmediadata:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static let interleavedWithMainMediaData: AVAssetWriterInput.MediaDataLocation
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avaudiospatializationformats/monoandstereo.md">static let beforeMainMediaDataNotInterleaved: AVAssetWriterInput.MediaDataLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">비 인터리브 데이터를 사용하고 인터리브 데이터 이전에 기록함을 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiospatializationformats/multichannel.md">static let sparselyInterleavedWithMainMediaData: AVAssetWriterInput.MediaDataLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">이 트랙에서 미디어 데이터가 장시간 없는 구간이 있을 수 있음을 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0002"><code>mediaDataLocation</code>이 이 값으로 설정되면 AVAssetWriter는 미디어 데이터를 인터리브하지만, 다른 트랙과의 조밀한 인터리브를 위해 이 트랙의 미디어 데이터가 도착하기를 기다리지 않습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetwriterinput/mediadatalocation-swift.struct/interleavedwithmainmediadata">View on Apple Developer</a>*</span>
