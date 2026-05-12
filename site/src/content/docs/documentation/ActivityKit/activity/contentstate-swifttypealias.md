---
source_path: "documentation/ActivityKit/activity/contentstate-swifttypealias.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/activitykit/activity/contentstate-swifttypealias"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:activitycontentstate:0000:0001">Activity.ContentState</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activitycontentstate:0001:0001">**Framework**: ActivityKit **Kind**: typealias</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activitycontentstate:0002:0001">Live Activity의 동적 콘텐츠를 설명하는 구조체의 타입 별칭입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activitycontentstate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:activitycontentstate:0004:0001">iOS 16.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:activitycontentstate:0004:0002">iPadOS 16.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
typealias ContentState = Attributes.ContentState
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="displaying-live-data-with-live-activities.md">Displaying live data with Live Activities</a></span>
- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0002"><a href="starting-and-updating-live-activities-with-activitykit-push-notifications.md">Starting and updating Live Activities with ActivityKit push notifications</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="activity/request(attributes:content:pushtype:">static func request(attributes: Attributes, content: ActivityContent&lt;Activity&lt;Attributes&gt;.ContentState&gt;, pushType: PushType?) throws -&gt; Activity&lt;Attributes&gt;</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">표준 Live Activity를 요청하고 시작합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="activity/request(attributes:content:pushtype:style:">static func request(attributes: Attributes, content: ActivityContent&lt;Activity&lt;Attributes&gt;.ContentState&gt;, pushType: PushType?, style: ActivityStyle) throws -&gt; Activity&lt;Attributes&gt;</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Live Activity를 요청하고 시작합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="activity/request(attributes:content:pushtype:style:alertconfiguration:start:">static func request(attributes: Attributes, content: ActivityContent&lt;Activity&lt;Attributes&gt;.ContentState&gt;, pushType: PushType?, style: ActivityStyle, alertConfiguration: AlertConfiguration, start: Date) throws -&gt; Activity&lt;Attributes&gt;</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">특정 날짜에 대한 Live Activity를 요청하고 예약합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="activity/request(attributes:content:pushtype:style:alertconfiguration:startdate:">static func request(attributes: Attributes, content: ActivityContent&lt;Activity&lt;Attributes&gt;.ContentState&gt;, pushType: PushType?, style: ActivityStyle, alertConfiguration: AlertConfiguration, startDate: Date) throws -&gt; Activity&lt;Attributes&gt;</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0002"><a href="activity/attributes.md">let attributes: Attributes</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Live Activity와 그 콘텐츠를 설명하는 속성 집합입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="activityattributes.md">protocol ActivityAttributes</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Live Activity의 콘텐츠를 설명하기 위해 구현하는 프로토콜입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="activitystyle.md">enum ActivityStyle</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0002"><a href="activity/content.md">var content: ActivityContent&lt;Activity&lt;Attributes&gt;.ContentState&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Live Activity의 동적 콘텐츠입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="activitycontent.md">struct ActivityContent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">The associated value is a string representing the calendar identifier for a <a href="https://developer.apple.com/documentation/CoreFoundation/CFCalendar">@@TOKEN_0@@</a>.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="pushtype.md">struct PushType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">ActivityKit 푸시 알림을 통해 업데이트를 받도록 Live Activity를 구성할 때 사용하는 상수를 제공하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="activityauthorizationerror.md">enum ActivityAuthorizationError</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Live Activity 시작 요청이 실패한 이유를 나타내는 오류입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/activitykit/activity/contentstate-swift.typealias">View on Apple Developer</a>*</span>
