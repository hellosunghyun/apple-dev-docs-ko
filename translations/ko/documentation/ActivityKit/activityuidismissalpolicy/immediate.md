---
source_path: "documentation/ActivityKit/activityuidismissalpolicy/immediate.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/activitykit/activityuidismissalpolicy/immediate"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:immediate:0000:0001">immediate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:immediate:0001:0001">**Framework**: ActivityKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:immediate:0002:0001">시스템은 종료된 Live Activity를 즉시 제거합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:immediate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:immediate:0004:0001">iOS 16.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:immediate:0004:0002">iPadOS 16.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static let immediate: ActivityUIDismissalPolicy
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="displaying-live-data-with-live-activities.md">Displaying live data with Live Activities</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001"><code>immediate</code> 해제 정책에서는 시스템이 종료된 Live Activity를 즉시 제거하고 <a href="activitystate.md">@@TOKEN_1@@</a>가 <a href="activitystate/dismissed.md">@@TOKEN_2@@</a>로 변경됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="activityuidismissalpolicy/default.md">static let @@TOKEN_0@@: ActivityUIDismissalPolicy</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Live Activity에 대한 시스템 기본 해제 정책입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="activityuidismissalpolicy/after(_:">static func after(Date) -&gt; ActivityUIDismissalPolicy</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">시스템은 지정된 시간에 종료된 Live Activity를 4시간 이내에 제거합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/activitykit/activityuidismissalpolicy/immediate">View on Apple Developer</a>*</span>
