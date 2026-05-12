---
source_path: "documentation/AVFoundation/avmetadatafaceobject/faceid.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmetadatafaceobject/faceid"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:faceid:0000:0001">faceID</span>

<span class="ko-segment" data-segment-id="seg:paragraph:faceid:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:faceid:0002:0001">이 얼굴 메타데이터 객체의 고유 ID입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:faceid:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:faceid:0004:0001">iOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:faceid:0004:0002">iPadOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:faceid:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:faceid:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:faceid:0004:0005">tvOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var faceID: Int { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">얼굴이 화면에 진입할 때마다 새 고유 식별자가 할당되며, 이를 사용해 코드에서 해당 얼굴을 참조할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">Face ID는 재사용되지 않으며, 화면에서 나갔다가 다시 들어온 동일한 얼굴은 새 식별자가 할당됩니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmetadatafaceobject/faceid">View on Apple Developer</a>*</span>
