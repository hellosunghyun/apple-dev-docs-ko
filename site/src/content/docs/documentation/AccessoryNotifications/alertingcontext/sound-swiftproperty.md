---
source_path: "documentation/AccessoryNotifications/alertingcontext/sound-swiftproperty.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accessorynotifications/alertingcontext/sound-swiftproperty"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sound:0000:0001">sound</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sound:0001:0001">**Framework**: Accessory Notifications **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sound:0002:0001">알림의 선택적 사운드 구성입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sound:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sound:0004:0001">iOS 26.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sound:0004:0002">iPadOS 26.5+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var sound: AlertingContext.Sound? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><code>nil</code> 값은 알림에 사운드가 없음을 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">For any values <code>a</code> and <code>b</code>, <code>a != b</code> implies that <code>a == b</code> is <code>false</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="alertingcontext/sound-swift.struct.md">AlertingContext.Sound</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">알림의 사운드 특성을 설명하는 구조체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/accessorynotifications/alertingcontext/sound-swift.property">View on Apple Developer</a>*</span>
