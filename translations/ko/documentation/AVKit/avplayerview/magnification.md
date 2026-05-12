---
source_path: "documentation/AVKit/avplayerview/magnification.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avplayerview/magnification"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:magnification:0000:0001">magnification</span>

<span class="ko-segment" data-segment-id="seg:paragraph:magnification:0001:0001">**Framework**: AVKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:magnification:0002:0001">비디오 보기의 현재 확대 배율을 나타내는 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:magnification:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:magnification:0004:0001">macOS 13.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var magnification: CGFloat { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">지원되는 확대 배율 범위는 <code>1.0</code>에서 <code>64.0</code>입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">시스템은 콘텐츠를 특정 배율보다 크게 스케일링한 뒤 최근접 이웃 보간으로 줌을 수행합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">기본값은 <code>1.0</code>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avplayerview/allowsmagnification.md">var allowsMagnification: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">확대 제스처가 비디오 보기 배율을 변경할지 여부를 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avplayerview/setmagnification(_:centeredat:">func setMagnification(CGFloat, centeredAt: CGPoint)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">지정한 계수만큼 비디오 보기의 배율을 조정하고 결과를 지정한 지점에 중심 정렬합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">*<a href="https://developer.apple.com/documentation/avkit/avplayerview/magnification">View on Apple Developer</a>*</span>
