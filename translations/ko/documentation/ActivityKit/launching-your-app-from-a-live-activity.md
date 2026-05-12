---
source_path: "documentation/ActivityKit/launching-your-app-from-a-live-activity.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/activitykit/launching-your-app-from-a-live-activity"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:launching-your-app-from-a-live-activity:0000:0001">라이브 액티비티에서 앱 실행하기</span>

<span class="ko-segment" data-segment-id="seg:paragraph:launching-your-app-from-a-live-activity:0001:0001">**프레임워크**: ActivityKit</span>

<span class="ko-segment" data-segment-id="seg:paragraph:launching-your-app-from-a-live-activity:0002:0001">딥 링크를 사용하여 사용자가 Live Activity 데이터와 일치하는 앱의 씬을 열 수 있게 합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0003:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0001">사용자는 Live Activity를 탭하여 앱을 실행할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0002">사용자가 더 많은 콘텐츠를 보거나 진행 중인 작업을 변경할 수 있도록, Live Activity의 콘텐츠와 일치하는 씬으로 앱을 엽니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:respond-to-the-systems-default-launch-behavior:0005:0001">시스템 기본 런치 동작에 응답하기</span>

<span class="ko-segment" data-segment-id="seg:paragraph:respond-to-the-systems-default-launch-behavior:0006:0001">앱에 대해 딥 링크를 명시적으로 제공하지 않으면, 시스템이 앱을 열고 <a href="https://developer.apple.com/documentation/Foundation/NSUserActivity">@@TOKEN_0@@</a>를 <a href="https://developer.apple.com/documentation/SwiftUI/View/onContinueUserActivity(_:perform:">@@TOKEN_1@@</a>), <a href="https://developer.apple.com/documentation/UIKit/UIApplicationDelegate/application(_:continue:restorationHandler:">@@TOKEN_2@@</a>), <a href="https://developer.apple.com/documentation/AppKit/NSApplicationDelegate/application(_:continue:restorationHandler:">@@TOKEN_3@@</a>)에 전달합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:respond-to-the-systems-default-launch-behavior:0006:0002">적절한 콜백을 구현하고 <code>NSUserActivity</code> 객체의 <a href="https://developer.apple.com/documentation/Foundation/NSUserActivity/activityType">@@TOKEN_1@@</a>가 <a href="https://developer.apple.com/documentation/WidgetKit/NSUserActivityTypeLiveActivity">@@TOKEN_2@@</a>인지 확인합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:respond-to-the-systems-default-launch-behavior:0006:0003">그다음, 활성 Live Activity의 컨텍스트에 맞는 화면을 앱에서 열도록 코드를 추가합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:respond-to-the-systems-default-launch-behavior:0007:0001">❗ **중요**: CarPlay에서 Live Activity를 탭하면 앱이 CarPlay를 지원하는 경우에만 앱이 실행됩니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:respond-to-the-systems-default-launch-behavior:0007:0002">앱에 CarPlay 지원을 추가하는 방법에 대한 자세한 내용은 <a href="https://developer.apple.com/documentation/CarPlay">@@TOKEN_0@@</a>를 참조합니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:add-deep-links-to-your-app:0008:0001">앱에 딥 링크 추가</span>

<span class="ko-segment" data-segment-id="seg:paragraph:add-deep-links-to-your-app:0009:0001">딥 링크를 사용하면 앱의 특정 화면을 직접 실행하는 URL을 지정하고, Live Activity 표시마다 다른 화면을 선택할 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:add-deep-links-to-your-app:0010:0001">잠금 화면, compact leading, compact trailing, minimal 표시에서 앱으로 딥 링크를 생성하려면 <a href="https://developer.apple.com/documentation/WidgetKit/DynamicIsland/widgetURL(_:">@@TOKEN_0@@</a>)를 사용합니다. compact leading 및 compact trailing 표시가 표시되는 경우 두 링크는 모두 앱의 동일한 화면으로 연결되어야 합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:add-deep-links-to-your-app:0010:0002">확장된(extended) 표시에서 앱으로 딥 링크를 생성하려면 <code>widgetURL(_:)</code> 또는 SwiftUI의 <a href="https://developer.apple.com/documentation/SwiftUI/Link">@@TOKEN_1@@</a>를 사용합니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:configure-how-your-live-activity-launches-your-app-in-watchos:0011:0001">watchOS에서 Live Activity를 통한 앱 실행 구성</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configure-how-your-live-activity-launches-your-app-in-watchos:0012:0001">Live Activity는 Apple Watch의 Smart Stack에 자동으로 표시되며, 시스템은 알림이 포함된 업데이트를 수신하면 Apple Watch에서 해당 Live Activity를 더 눈에 띄게 표시합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configure-how-your-live-activity-launches-your-app-in-watchos:0012:0002">Live Activity에 업데이트가 수신되면:</span>

- <span class="ko-segment" data-segment-id="seg:list:configure-how-your-live-activity-launches-your-app-in-watchos:0013:0001">사용자가 Apple Watch에서 앱을 적극적으로 사용하지 않는 경우, 시스템은 compact presentation의 leading 및 trailing 보기를 사용하는 알림을 표시한 뒤 Smart Stack을 실행하고 스택 맨 위에 Live Activity를 표시합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:configure-how-your-live-activity-launches-your-app-in-watchos:0013:0002">사용자가 Apple Watch에서 어떤 앱이든 적극적으로 사용 중인 경우, 시스템은 업데이트된 Live Activity를 알리기 위해 알림을 표시합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configure-how-your-live-activity-launches-your-app-in-watchos:0014:0001">알림을 탭하면 Apple Watch에서 Live Activity가 표시되고 iPhone에서 앱을 실행할 수 있는 옵션이 제공됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configure-how-your-live-activity-launches-your-app-in-watchos:0014:0002">Live Activity에서 Watch 앱을 열 수 있도록 사용자가 선택하도록 설정할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configure-how-your-live-activity-launches-your-app-in-watchos:0014:0003">watchOS 앱 대상의 Build Settings에서 <code>Info.plist</code> 섹션에 <code>Supports Launch for Live Activity Attribute Types</code> 키를 추가합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configure-how-your-live-activity-launches-your-app-in-watchos:0014:0004">모든 Live Activity에 대해 Watch 앱을 실행하려면 해당 값을 비워 둡니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configure-how-your-live-activity-launches-your-app-in-watchos:0014:0005">특정 Live Activity를 실행하려면 watchOS 앱을 실행하는 각 <a href="activityattributes.md">@@TOKEN_0@@</a> 준수 형식에 대한 항목을 추가합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">관련 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="creating-custom-views-for-live-activities.md">Creating custom views for Live Activities</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">각 Live Activity 표시를 지원하는 재사용 가능한 사용자 지정 뷰와 레이아웃을 만듭니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="adding-accessible-descriptions-to-widgets-and-live-activities.md">Adding accessible descriptions to widgets and Live Activities</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">위젯 및 Live Activity의 인터페이스 요소를 설명해 사용자가 해당 요소의 의미를 이해할 수 있도록 합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/activitykit/launching-your-app-from-a-live-activity">View on Apple Developer</a>*</span>
