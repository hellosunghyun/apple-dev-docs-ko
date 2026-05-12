---
source_path: "documentation/AVFoundation/avassettrack/naturalsize.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassettrack/naturalsize"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:naturalsize:0000:0001">naturalSize</span>

<span class="ko-segment" data-segment-id="seg:paragraph:naturalsize:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:naturalsize:0002:0001">트랙이 참조하는 미디어 데이터의 자연 크기입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:naturalsize:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:naturalsize:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:naturalsize:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:naturalsize:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:naturalsize:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:naturalsize:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:naturalsize:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:naturalsize:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var naturalSize: CGSize { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">동영상이나 자막 트랙과 같은 시각적 트랙의 경우 이 property 값은 미디어의 자연 크기입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">오디오나 챕터 트랙 같은 비시각적 트랙의 경우 값은 <a href="https://developer.apple.com/documentation/CoreFoundation/CGSize/zero">@@TOKEN_0@@</a>입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassettrack/naturalsize">View on Apple Developer</a>*</span>
