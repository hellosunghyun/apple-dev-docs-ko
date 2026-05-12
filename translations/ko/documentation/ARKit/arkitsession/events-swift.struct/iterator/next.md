---
source_path: "documentation/ARKit/arkitsession/events-swift.struct/iterator/next.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arkitsession/events-swift.struct/iterator/next"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:next:0000:0001">next()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:next:0001:0001">**Framework**: ARKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:next:0002:0001">시퀀스의 다음 요소를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:next:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:next:0004:0001">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:next:0004:0002">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
mutating func next() async -> ARKitSession.Events.Element?
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><a href="arkitsession/events-swift.struct/element.md">@@TOKEN_0@@</a>을 반환하며, 추가 요소가 없으면 <code>nil</code>을 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0010:0001">*<a href="https://developer.apple.com/documentation/arkit/arkitsession/events-swift.struct/iterator/next(">View on Apple Developer</a>)*</span>
