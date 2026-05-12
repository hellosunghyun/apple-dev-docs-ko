---
source_path: "documentation/AVFoundation/avmetadatafaceobject/rollangle.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmetadatafaceobject/rollangle"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:rollangle:0000:0001">rollAngle</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rollangle:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rollangle:0002:0001">지정된 얼굴의 롤 각도를 도 단위로 나타냅니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rollangle:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:rollangle:0004:0001">iOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rollangle:0004:0002">iPadOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rollangle:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rollangle:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:rollangle:0004:0005">tvOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var rollAngle: CGFloat { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">롤 각도는 메타데이터의 바운딩 사각형을 기준으로 얼굴이 좌우로 기울어진 정도를 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">값이 <code>0.0</code>이면 사진에 대해 얼굴이 수평이고, 값이 <code>90</code>이면 사진에 대해 얼굴이 수직이 됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 속성에 접근하기 전에 <a href="avmetadatafaceobject/hasrollangle.md">@@TOKEN_0@@</a> 속성 값을 확인해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002"><a href="avmetadatafaceobject/hasrollangle.md">@@TOKEN_0@@</a> 값이 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>인 경우, 이 속성의 값을 읽으면 예외가 발생합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avmetadatafaceobject/hasrollangle.md">var hasRollAngle: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">얼굴과 연결된 유효한 롤 각도가 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avmetadatafaceobject/hasyawangle.md">var hasYawAngle: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">얼굴과 연결된 유효한 요(yaw) 각도가 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avmetadatafaceobject/yawangle.md">var yawAngle: CGFloat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">지정된 얼굴의 요각을 도 단위로 나타냅니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmetadatafaceobject/rollangle">View on Apple Developer</a>*</span>
