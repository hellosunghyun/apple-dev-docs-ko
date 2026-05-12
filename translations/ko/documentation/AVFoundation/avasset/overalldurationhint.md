---
source_path: "documentation/AVFoundation/avasset/overalldurationhint.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avasset/overalldurationhint"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:overalldurationhint:0000:0001">overallDurationHint</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overalldurationhint:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overalldurationhint:0002:0001">현재 존재하거나 향후 존재할 수 있는 조각의 총 지속 시간입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overalldurationhint:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:overalldurationhint:0004:0001">iOS 10.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:overalldurationhint:0004:0002">iPadOS 10.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:overalldurationhint:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:overalldurationhint:0004:0004">macOS 10.12.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:overalldurationhint:0004:0005">tvOS 10.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:overalldurationhint:0004:0006">watchOS 3.2+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var overallDurationHint: CMTime { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">You may set the value of a capture device’s <a href="avcapturedevice/activeformat.md">@@TOKEN_0@@</a> in two ways:</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">If you set the value of this property to <code>nil</code>, the output vends samples in their device native format.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avasset/overalldurationhint">View on Apple Developer</a>*</span>
