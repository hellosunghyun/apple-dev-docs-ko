---
source_path: "documentation/ARKit/arkitsession.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arkitsession"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:arkitsession:0000:0001">ARKitSession</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arkitsession:0001:0001">**Framework**: ARKit **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arkitsession:0002:0001">ARKit에서 데이터를 수신하기 위한 기본 진입점입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arkitsession:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:arkitsession:0004:0001">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:arkitsession:0004:0002">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
final class ARKitSession
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">ARKit의 세션은 암시적 권한 부여 또는 명시적 권한 부여가 필요합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">특정 유형의 데이터에 대해 명시적으로 사용자 권한 부여를 요청하고 권한 안내를 표시할 시점을 지정하려면 <a href="arkitsession/run(_:">@@TOKEN_0@@</a>.md) 전에 <a href="arkitsession/requestauthorization(for:">@@TOKEN_1@@</a>.md)를 호출합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">다음은 월드 센싱을 사용하기 위해 암시적 권한 부여를 요청한 뒤 시작하는 세션입니다.</span>

```swift
let planeData = PlaneDetectionProvider(alignments: [.horizontal, .vertical])

Task {
    do {
        try await self.session.run([planeData])
        // Update app based on the planeData.anchorUpdates async sequence.
    } catch {
        print("ARKitSession error:", error)
    }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0001"><a href="planedetectionprovider.md">@@TOKEN_0@@</a> 인스턴스의 필수 권한 부여 항목에 <a href="arkitsession/authorizationtype/worldsensing.md">@@TOKEN_1@@</a>이 포함되어 있으므로, 시스템은 ARKit이 해당 유형의 데이터를 제공하기 전에 앱 사용자의 월드 센싱 사용을 허용하도록 요청합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0012:0001">**참고**: ARKit은 세션이 비활성화되면 세션을 중지합니다. 세션이 실행되는 동안에는 세션 인스턴스에 대한 참조를 유지해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0013:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:starting-and-stopping-a-session:0014:0001">세션 시작 및 중지</span>

- <span class="ko-segment" data-segment-id="seg:list:starting-and-stopping-a-session:0015:0001"><a href="arkitsession/init.md">convenience init()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:starting-and-stopping-a-session:0016:0001">새 세션을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:starting-and-stopping-a-session:0017:0001">[func run([any DataProvider]) async throws](arkitsession/run(_:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:starting-and-stopping-a-session:0018:0001">제공한 데이터 공급자로 세션을 실행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:starting-and-stopping-a-session:0019:0001"><a href="arkitsession/stop.md">func stop()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:starting-and-stopping-a-session:0020:0001">이 세션에서 실행 중인 모든 데이터 공급자를 중지합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:starting-and-stopping-a-session:0021:0001"><a href="arkitsession/error.md">ARKitSession.Error</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:starting-and-stopping-a-session:0022:0001">ARKit 세션에서 데이터 공급자를 실행할 때 발생할 수 있는 오류입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-authorization:0023:0001">권한 부여 가져오기</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-authorization:0024:0001">[func requestAuthorization(for: [ARKitSession.AuthorizationType]) async -&gt; [ARKitSession.AuthorizationType : ARKitSession.AuthorizationStatus]](arkitsession/requestauthorization(for:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-authorization:0025:0001">지정한 ARKit 데이터 유형을 사용하기 위해 사용자에게 권한 부여를 요청합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-authorization:0026:0001"><a href="arkitsession/authorizationtype.md">ARKitSession.AuthorizationType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-authorization:0027:0001">ARKit에서 요청할 수 있는 권한 부여 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-authorization:0028:0001">[func queryAuthorization(for: [ARKitSession.AuthorizationType]) async -&gt; [ARKitSession.AuthorizationType : ARKitSession.AuthorizationStatus]](arkitsession/queryauthorization(for:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-authorization:0029:0001">현재 세션이 특정 권한 부여 유형에 대해 권한이 있는지 권한 요청 없이 확인합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-authorization:0030:0001"><a href="arkitsession/authorizationstatus.md">ARKitSession.AuthorizationStatus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-authorization:0031:0001">ARKit 데이터 유형의 권한 부여 상태입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:observing-a-session:0032:0001">세션 관찰</span>

- <span class="ko-segment" data-segment-id="seg:list:observing-a-session:0033:0001"><a href="arkitsession/events-swift.property.md">var events: ARKitSession.Events</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:observing-a-session:0034:0001">세션의 현재 권한 부여 상태를 갱신하는 이벤트의 비동기 시퀀스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:observing-a-session:0035:0001"><a href="arkitsession/events-swift.struct.md">ARKitSession.Events</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:observing-a-session:0036:0001">이벤트의 시퀀스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:observing-a-session:0037:0001"><a href="arkitsession/event.md">ARKitSession.Event</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:observing-a-session:0038:0001">가능한 세션 이벤트의 열거형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:observing-a-session:0039:0001"><a href="arkitsession/description.md">var description: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:observing-a-session:0040:0001">이 세션의 텍스트 표현입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0041:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0042:0001"><a href="arkitsession/init(device:">convenience init(device: RemoteDeviceIdentifier)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0043:0001">지정된 장치에 연결된 새 세션을 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:instance-properties:0044:0001">인스턴스 속성</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0045:0001">[var dataProviders: [any DataProvider]](arkitsession/dataproviders.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0046:0001">이 세션의 모든 데이터 공급자 목록입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0047:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0048:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0001"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0002"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0003"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0050:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0051:0001"><a href="../visionOS/setting-up-access-to-arkit-data.md">Setting up access to ARKit data</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0052:0001">앱이 ARKit을 사용할 수 있고 개인정보 보호를 존중하는지 확인합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0053:0001"><a href="dataprovider.md">protocol DataProvider</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0054:0001">ARKit의 실시간 데이터 소스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0055:0001"><a href="anchor.md">protocol Anchor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0056:0001">월드 스페이스에서 객체의 ID, 위치 및 방향입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0057:0001"><a href="arkit-in-visionos.md">ARKit in visionOS</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0058:0001">몰입형 증강 현실 경험을 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0060:0001">*<a href="https://developer.apple.com/documentation/arkit/arkitsession">View on Apple Developer</a>*</span>
