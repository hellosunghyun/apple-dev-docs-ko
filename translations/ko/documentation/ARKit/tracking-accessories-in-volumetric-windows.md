---
source_path: "documentation/ARKit/tracking-accessories-in-volumetric-windows.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/tracking-accessories-in-volumetric-windows"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:tracking-accessories-in-volumetric-windows:0000:0001">볼류메트릭 윈도우에서 액세서리 추적</span>

<span class="ko-segment" data-segment-id="seg:paragraph:tracking-accessories-in-volumetric-windows:0001:0001">**프레임워크**: ARKit</span>

<span class="ko-segment" data-segment-id="seg:paragraph:tracking-accessories-in-volumetric-windows:0002:0001">추적된 손에 쥐어진 액세서리의 위치와 속도를 변환해 가상 공을 캔 더미에 던집니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:tracking-accessories-in-volumetric-windows:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:tracking-accessories-in-volumetric-windows:0004:0001">visionOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:tracking-accessories-in-volumetric-windows:0004:0002">Xcode 26.0+</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0005:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0001">액세서리는 Apple Vision Pro의 사용성을 높이며, 정밀 제어, 새로운 입력 방식, 맞춤형 경험을 지원해 추가 기능과 유연성을 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0002">ARKit를 사용해 액세서리의 위치를 찾고 추적할 수 있으며, 해당 실제 동작을 앱에서 접근 가능한 데이터로 변환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0003">특히 ARKit는 액세서리의 위치와 방향을 고빈도로 추적하며, 이를 통해 선형 속도와 각속도 정보를 도출합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0004">또한 ARKit는 실제 추적 정보를 앱의 관련 좌표 공간으로 변환하는 메서드를 제공합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0007:0001">**참고**: 추적 가능한 액세서리를 갖춘 사용자는 소수에 불과할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">일부 경험은 액세서리가 필요할 수 있지만, 대부분은 컨트롤러와 손을 모두 사용해 작업을 수행할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">이 샘플 코드 프로젝트는 상자 안에 쌓인 캔 세트로 카니발형 경험을 구성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0002">캔은 물리 바디를 가지며 중력의 영향을 받아 던져진 테니스공이 충돌하면 떨어집니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0003">상자는 이를 포함하는 볼륨을 채우며, 앱은 액세서리가 볼륨 내에서 감지되면 이를 추적합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0004">샘플은 추적 정보를 사용해 화면의 액세서리 위에 가상 테니스공 모델을 배치합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0005">빠르게 던지는 동작으로 공이 던져져 캔이 넘어지고, 시계 방향과 반시계 방향 회전을 빠르게 반복해 다시 쌓습니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:set-up-the-sample:0010:0001">샘플 설정</span>

<span class="ko-segment" data-segment-id="seg:paragraph:set-up-the-sample:0011:0001">이 샘플은 앱이 추적 정보를 사용하는 방식을 설명하는 <a href="https://developer.apple.com/documentation/BundleResources/Information-Property-List/NSAccessoryTrackingUsageDescription">@@TOKEN_0@@</a> 항목을 정보 속성 목록 파일에 추가합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:set-up-the-sample:0011:0002">또한 <a href="https://developer.apple.com/documentation/GameController">@@TOKEN_0@@</a> 프레임워크에서 요청 시 컨트롤러를 반환하려면 <code>SpatialGamepad</code> 유형을 가진 <a href="https://developer.apple.com/documentation/BundleResources/Information-Property-List/GCSupportedGameControllers">@@TOKEN_2@@</a> 항목이 필요합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:set-up-the-sample:0011:0003">컨트롤러를 추적하려면 앱은 GameController 프레임워크의 <a href="https://developer.apple.com/documentation/Foundation/NSNotification/Name-swift.struct/GCControllerDidConnect">@@TOKEN_0@@</a> 및 <a href="https://developer.apple.com/documentation/Foundation/NSNotification/Name-swift.struct/GCControllerDidDisconnect">@@TOKEN_1@@</a> 알림을 관찰해 시스템이 추가 및 제거하는 액세서리를 모니터링해야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:set-up-the-sample:0012:0001">알림 객체는 연결 상태를 변경하는 <code>GCController</code>입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:set-up-the-sample:0012:0002">샘플은 먼저 <a href="accessorytrackingprovider/issupported.md">@@TOKEN_0@@</a>를 확인해 액세서리 추적이 가능한지 판별합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:set-up-the-sample:0012:0003">**참고**: 시뮬레이터는 액세서리 추적을 지원하지 않으므로 샘플 앱을 실행하려면 실제 기기가 필요합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:set-up-the-sample:0013:0001">**참고**: 시뮬레이터는 액세서리 추적을 지원하지 않으므로 샘플 앱을 실행하려면 물리 디바이스가 필요합니다.</span>

```swift
    if !AccessoryTrackingProvider.isSupported {
        state = .accessoryTrackingNotSupported
        return
    }
    
    // Listen for connected and disconnected controllers.
    NotificationCenter.default.addObserver(forName: NSNotification.Name.GCControllerDidConnect,
                                           object: nil,
                                           queue: nil) { notification in
        if let controller = notification.object as? GCController {
            guard controller.productCategory == GCProductCategorySpatialController else {
                return
            }
            
            //...
        }
    }
    
    NotificationCenter.default.addObserver(forName: NSNotification.Name.GCControllerDidDisconnect,
                                           object: nil,
                                           queue: nil) { notification in
        if let controller = notification.object as? GCController {
            if controller.productCategory == GCProductCategorySpatialController {
                //...
            }
        }
    }
```

<span class="ko-segment" data-segment-id="seg:paragraph:set-up-the-sample:0015:0001"><a href="accessorytrackingprovider.md">@@TOKEN_0@@</a>가 실행 중인 <a href="arkitsession.md">@@TOKEN_1@@</a>은 권한 부여를 묵시적으로 요청합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:set-up-the-sample:0015:0002">앱은 <a href="arkitsession/event/authorizationchanged(type:status:">@@TOKEN_0@@</a>.md) 세션 이벤트로 이를 처리할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:set-up-the-sample:0015:0003">플레이어가 추적 권한을 허용하면, <code>authorizationChanged</code> 핸들러의 코드가 컨트롤러 추적을 시작합니다.</span>

```swift
private func monitorARKitSessionEvents() async {
    for await event in arkitSession.events {
        switch event {
            case .dataProviderStateChanged(_, let newState, let error):
                if newState == .stopped {
                    if let error {
                        print("An error occurred: \(error)")
                        state = .arkitSessionError
                    }
                }
        case .authorizationChanged(let type, let authorizationStatus):
            if type == .accessoryTracking {
                if authorizationStatus == .denied {
                    state = .accessoryTrackingNotAuthorized
                } else if authorizationStatus == .allowed {
                    state = .startingUp
                    // ...
                }
            }
        default:
            break
        }
    }
}
```

##### <span class="ko-segment" data-segment-id="seg:heading:track-accessories:0017:0001">액세서리 추적</span>

<span class="ko-segment" data-segment-id="seg:paragraph:track-accessories:0018:0001">샘플의 추적 코드에서는 <a href="https://developer.apple.com/documentation/GameController/GCController/controllers(">@@TOKEN_0@@</a>)를 사용해 사용 가능한 모든 컨트롤러를 요청합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:track-accessories:0018:0002">반환된 <a href="https://developer.apple.com/documentation/GameController/GCController">@@TOKEN_0@@</a> 디바이스에서 추적 가능한 ARKit <a href="accessory.md">@@TOKEN_1@@</a> 객체를 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:track-accessories:0018:0003">사용 가능한 액세서리를 <a href="accessorytrackingprovider.md">@@TOKEN_0@@</a>에 전달하면 샘플이 <a href="arsession.md">@@TOKEN_1@@</a> 객체에서 실행할 때 <a href="Anchor.md">@@TOKEN_2@@</a> 업데이트에 접근할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:track-accessories:0018:0004">액세서리 이벤트는 <a href="accessorytrackingprovider/anchorupdates.md">@@TOKEN_0@@</a>에서 비동기적으로 사용할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:track-accessories:0018:0005">추적 중에 샘플은 볼륨 내 컨트롤러 존재 여부 확인, 테니스 공 위치와 컨트롤러 동기화, 플레이어의 던지기 또는 흔들기 동작 확인을 수행합니다.</span>

```swift
let accessoryTracking = AccessoryTrackingProvider(accessories: accessories)

do {
    try await arkitSession.run([accessoryTracking])
    state = .inGame
    gameState = .startNewGame
} catch {
    return
}

for await update in accessoryTracking.anchorUpdates {
    process(update)
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:track-accessories:0020:0001">시스템은 <a href="https://developer.apple.com/documentation/RealityKit/RealityView">@@TOKEN_0@@</a> 업데이트 클로저를 사용해 컨트롤러가 볼륨 내에 있는지 확인하고, 샘플은 볼륨이 정한 바운딩 박스를 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:track-accessories:0020:0002">적어도 하나 이상의 컨트롤러가 연결되어 볼륨 경계 내에 있으면 앱 상태가 그에 맞게 업데이트됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:track-accessories:0020:0003">모든 컨트롤러가 경계 밖에 있으면 볼륨의 툴바에 Out of Bounds 메시지가 표시됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:track-accessories:0021:0001">추적되는 각 액세서리에 대해 앱은 테니스 공 엔티티를 생성하고, 액세서리 추적 앵커 업데이트를 처리하면서 위치를 재배치합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:track-accessories:0021:0002"><a href="accessoryanchor.md">@@TOKEN_0@@</a>의 <code>transform</code>은 <a href="https://developer.apple.com/documentation/Spatial/WorldReferenceCoordinateSpace">@@TOKEN_2@@</a>에 상대적입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:track-accessories:0021:0003">앱은 <code>RealityView</code> 안의 볼륨에서 테니스 공 모델을 포함하며, 이는 월드 기준 좌표 공간과 정렬되지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:track-accessories:0021:0004">추적된 액세서리 위치를 테니스 공 배치로 변환하는 과정은 복잡합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:track-accessories:0021:0005">샘플은 복잡성을 없애기 위해 앵커의 <a href="accessoryanchor/coordinatespace(for:correction:">@@TOKEN_0@@</a>.md) 메서드로 액세서리가 볼륨 내부에 있는지 확인합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:track-accessories:0021:0006">액세서리가 볼륨 밖으로 이동하면 테니스 공 엔티티가 렌더링되지 않습니다.</span>

```swift
let aimPoint = controllerAnchor.coordinateSpace(for: .aim, correction: .rendered)

if let realityViewFromAimPointTransform = try? realityViewOrigin.transform(from: aimPoint) {
    let aimPointPosition = realityViewFromAimPointTransform.matrix.columns.3.xyz
    isInsideRealityView = realityViewEdges.contains(aimPointPosition)
}
```

##### <span class="ko-segment" data-segment-id="seg:heading:create-throw-and-reset-gestures:0023:0001">던지기 및 재설정 제스처 생성</span>

<span class="ko-segment" data-segment-id="seg:paragraph:create-throw-and-reset-gestures:0024:0001">앵커 업데이트 처리를 수행하는 동안 샘플은 테니스 공 던지기와 흔들기 동작에 대한 재설정 액션 확인을 처리합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:create-throw-and-reset-gestures:0024:0002">앱은 액세서리의 최대 속도를 추적해 현재 속도가 0.6 m/s 감소하는 시점을 감지함으로써 던지기를 트리거합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:create-throw-and-reset-gestures:0024:0003">앱은 액세서리 앵커의 로컬 좌표 공간에서 액세서리 속도를 3D 벡터로 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:create-throw-and-reset-gestures:0024:0004">정확한 속도를 얻기 위해 앱은 <code>convert(value:, to:)</code> 메서드를 사용해 벡터를 <code>gameRoot</code> 좌표 공간 기준으로 변환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:create-throw-and-reset-gestures:0024:0005">캔을 맞히기 위해, 던지기 액세서리 앵커와 연결된 공은 앵커와 동일한 속도를 유지합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:create-throw-and-reset-gestures:0024:0006">시스템이 1초 안에 던지기를 등록하지 않으면 던지기 추적을 재설정합니다.</span>

```swift
guard let anchor = controller.anchor else { return }

let controllerSpeed = length(anchor.velocity)
controller.pendingThrow.peakSpeed = max(controller.pendingThrow.peakSpeed, controllerSpeed)

if controller.pendingThrow.peakSpeed > 1.2 &&
    controllerSpeed < controller.pendingThrow.peakSpeed - 0.6 {
    // Trigger a throw if:
    // The controller's peak speed is more than 1.2 m/s.
    // The controller's speed drops more than 0.6 m/s below the peak.
    if controller.triggeredThrow == nil {
        controller.pendingThrow.anchor = anchor
        
        controller.triggeredThrow = controller.pendingThrow
        controller.pendingThrow = Throw()
        
        Task {
            // Allow the next throw after 1 second.
            try? await Task.sleep(for: .milliseconds(1000))
            controller.triggeredThrow = nil
        }
    }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:create-throw-and-reset-gestures:0026:0001">앱은 액세서리를 z축을 기준으로 시계 방향과 반시계 방향으로 빠르게 회전시켜 리셋을 트리거합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:create-throw-and-reset-gestures:0026:0002">앵커의 <a href="accessoryanchor/angularvelocity.md">@@TOKEN_0@@</a> 속성은 현재 회전 속도를 제공합니다.</span>

```swift
guard let anchor = controller.anchor else { return }

let controllerZAngularVelocity = anchor.angularVelocity[2]
controller.pendingShake.peakAngularVelocity = max(controller.pendingShake.peakAngularVelocity, controllerZAngularVelocity)
```

<span class="ko-segment" data-segment-id="seg:paragraph:create-throw-and-reset-gestures:0028:0001">양수와 음수 각속도 90 deg/s를 확인하면 샘플은 방향이 바뀔 때마다 흔들림 카운트를 증가시킵니다.</span>

```swift
let halfPi: Float = .pi / 2

if controllerZAngularVelocity < controller.pendingShake.peakAngularVelocity - halfPi &&
    abs(anchor.angularVelocity[0]) < halfPi && abs(anchor.angularVelocity[1]) < halfPi {
    // Detect a controller oscillation on the z-axis if:
    // The controller's angular velocity on the z-axis drops more than 90 deg/s below the peak angular velocity.
    // The controller's angular velocity on the other axes is less than 90 deg/s.
    let controllerPosition: SIMD3<Float> = anchor.originFromAnchorTransform.columns.3.xyz
    
    // Reset the shake if the user moves too much.
    if let shakePrevPos = controller.pendingShake.initialPosition {
        guard length(controllerPosition - shakePrevPos) < 0.2 else {
            controller.pendingShake = Shake()
            return
        }
    }
    
    if controllerZAngularVelocity < -halfPi {
        if controller.pendingShake.currentDirection == .counterClockwise {
            controller.pendingShake.oscillationCount += 1
        }
        controller.pendingShake.currentDirection = .clockwise
    } else if controllerZAngularVelocity > halfPi {
        if controller.pendingShake.currentDirection == .clockwise {
            controller.pendingShake.oscillationCount += 1
        }
        controller.pendingShake.currentDirection = .counterClockwise
    }
    
    if controller.pendingShake.oscillationCount == 1 {
        controller.pendingShake.initialPosition = controllerPosition
    }
```

<span class="ko-segment" data-segment-id="seg:paragraph:create-throw-and-reset-gestures:0030:0001">흔들림 방향이 여섯 번 바뀌면 앱이 동작을 수행하고 캔을 스택으로 리셋하여 다음 게임을 준비합니다.</span>

```swift
    if controller.triggeredShake == nil && controller.pendingShake.oscillationCount >= 6 {
        controller.triggeredShake = controller.pendingShake
        controller.pendingShake = Shake()
        
        gameState = .startNewGame
        
        Task {
            // Reset the triggered shake after 0.5 seconds.
            try? await Task.sleep(for: .milliseconds(500))
            controller.triggeredShake = nil
        }
    }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0032:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="accessorytrackingprovider.md">class AccessoryTrackingProvider</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">사용자 환경에서 액세서리의 실시간 위치를 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="accessory.md">struct Accessory</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">추적할 액세서리를 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="accessoryanchor.md">struct AccessoryAnchor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">추적된 액세서리를 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="tracking-a-handheld-accessory-as-a-virtual-sculpting-tool.md">Tracking a handheld accessory as a virtual sculpting tool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">Apple Vision Pro에서 추적된 액세서리를 사용해 가상 조각을 만듭니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">*<a href="https://developer.apple.com/documentation/arkit/tracking-accessories-in-volumetric-windows">View on Apple Developer</a>*</span>
