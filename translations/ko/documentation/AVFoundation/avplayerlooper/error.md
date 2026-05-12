---
source_path: "documentation/AVFoundation/avplayerlooper/error.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayerlooper/error"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:error:0000:0001">error</span>

<span class="ko-segment" data-segment-id="seg:paragraph:error:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:error:0002:0001">반복 실패 사유를 설명하는 오류입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:error:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:error:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:error:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:error:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:error:0004:0004">macOS 10.12+</span>
- <span class="ko-segment" data-segment-id="seg:list:error:0004:0005">tvOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:error:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var error: (any Error)? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This property provides access to an instance of <a href="avassetcache.md">@@TOKEN_0@@</a> to use for inspection of locally cached media data.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">The value of this property is <code>nil</code> if you haven’t configured the asset to store or access media data from disk.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayerlooper/error">View on Apple Developer</a>*</span>
