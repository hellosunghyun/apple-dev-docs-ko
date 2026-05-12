---
source_path: "documentation/ARKit/adding-realistic-reflections-to-an-ar-experience.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/adding-realistic-reflections-to-an-ar-experience"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:adding-realistic-reflections-to-an-ar-experience:0000:0001">Adding realistic reflections to an AR experience</span>

<span class="ko-segment" data-segment-id="seg:paragraph:adding-realistic-reflections-to-an-ar-experience:0001:0001">**Framework**: ARKit</span>

<span class="ko-segment" data-segment-id="seg:paragraph:adding-realistic-reflections-to-an-ar-experience:0002:0001">Use ARKit to generate environment probe textures from camera imagery and render reflective virtual objects.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:adding-realistic-reflections-to-an-ar-experience:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:adding-realistic-reflections-to-an-ar-experience:0004:0001">iOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:adding-realistic-reflections-to-an-ar-experience:0004:0002">iPadOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:adding-realistic-reflections-to-an-ar-experience:0004:0003">Mac Catalyst 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:adding-realistic-reflections-to-an-ar-experience:0004:0004">Xcode 16.0+</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0005:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0001">This app provides a simple AR experience demonstrating the environment texturing features in ARKit 2 and SceneKit.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0002">After you build and run the app, explore your surroundings in the camera view.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0003">Then, tap a nearby horizontal surface to place a virtual object: a mirror-finish sphere.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0004">After you place the object, you can drag it around or tap to move it to another location.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0005">You can also pinch to make the object bigger or smaller.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0007:0001">!<a href="https://docs-assets.developer.apple.com/published/c91fbc006b62c26b4e97784ab5dddfc0/Screenshots.png">Screenshots of the sample app, showing UI prompts for placing a virtual object, the shiny virtual sphere, and the virtual sphere showing the reflection of a real object.</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">Notice the surface of the virtual sphere shows a generally realistic (if not perfectly accurate) reflection of its real-world surroundings.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">To create reflective virtual surfaces, a renderer (such as SceneKit) needs an *environment texture*—an image that captures the view in all directions from a certain point in the scene (called an *environment probe*).</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0003">Realistically rendering reflections for multiple objects, or moving objects, may require multiple environment textures, each capturing the scene from a different point of view.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">ARKit generates environment textures by collecting camera imagery during the AR session.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0002">Because ARKit cannot see the scene in all directions, it uses machine learning to extrapolate a realistic environment from available imagery.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:getting-started:0010:0001">Getting Started</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-started:0011:0001">Before you can run the sample code project, you’ll need:</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-started:0012:0001">Xcode 10 or later.</span>
- <span class="ko-segment" data-segment-id="seg:list:getting-started:0012:0002">iOS 12 or later.</span>
- <span class="ko-segment" data-segment-id="seg:list:getting-started:0012:0003">An iOS device with an A9 processor or later.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:set-up-environment-texturing:0013:0001">Set Up Environment Texturing</span>

<span class="ko-segment" data-segment-id="seg:paragraph:set-up-environment-texturing:0014:0001">As with any AR experience, you run a session with a world tracking configuration and whatever other options you want to enable.</span> <span class="ko-segment" data-segment-id="seg:paragraph:set-up-environment-texturing:0014:0002">(For example, this app allows you to place virtual objects on flat surfaces, so it enables horizontal plane detection.) To generate environment textures, also set the configuration’s <a href="arworldtrackingconfiguration/environmenttexturing-swift.enum/automatic.md">@@TOKEN_0@@</a> property:</span>

```swift
let configuration = ARWorldTrackingConfiguration()
configuration.planeDetection = .horizontal
configuration.environmentTexturing = .automatic
sceneView.session.run(configuration)
```

<span class="ko-segment" data-segment-id="seg:paragraph:set-up-environment-texturing:0016:0001">With <a href="arworldtrackingconfiguration/environmenttexturing-swift.enum/automatic.md">@@TOKEN_0@@</a> environment texturing (the default for this app) ARKit automatically chooses when and where to generate textures.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:render-virtual-objects-with-reflection:0017:0001">Render Virtual Objects with Reflection</span>

<span class="ko-segment" data-segment-id="seg:paragraph:render-virtual-objects-with-reflection:0018:0001">Because this app also uses <a href="arscnview.md">@@TOKEN_0@@</a> to display AR content, SceneKit automatically uses the appropriate environment texture to render each virtual object in the scene.</span> <span class="ko-segment" data-segment-id="seg:paragraph:render-virtual-objects-with-reflection:0018:0002">In SceneKit, any asset using <a href="https://developer.apple.com/documentation/SceneKit/SCNMaterial/LightingModel-swift.struct">@@TOKEN_0@@</a> materials automatically uses *environmental lighting*.</span> <span class="ko-segment" data-segment-id="seg:paragraph:render-virtual-objects-with-reflection:0018:0003">With environmental lighting, the shading for each point on a surface depends on nearby light probe textures or the global lighting environment in the direction that point faces.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:render-virtual-objects-with-reflection:0019:0001">The visual effect of environment texturing depends on how you configure the properties of a physically based material.</span> <span class="ko-segment" data-segment-id="seg:paragraph:render-virtual-objects-with-reflection:0019:0002">For example, materials with a high <a href="https://developer.apple.com/documentation/SceneKit/SCNMaterial/roughness">@@TOKEN_0@@</a> pick up some diffuse color from the texture, and materials with low <a href="https://developer.apple.com/documentation/SceneKit/SCNMaterial/roughness">@@TOKEN_1@@</a> and high <a href="https://developer.apple.com/documentation/SceneKit/SCNMaterial/metalness">@@TOKEN_2@@</a> reflect their surroundings with a mirror-like finish.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:render-virtual-objects-with-reflection:0020:0001">!<a href="https://docs-assets.developer.apple.com/published/e00c718b92ef4a1fcb9c7c53292d313f/Roughness.png">Detail screenshots showing the effect of three different environment textures on both smooth and rough virtual spheres.</a></span>

> <span class="ko-segment" data-segment-id="seg:blockquote:render-virtual-objects-with-reflection:0021:0001">**Note**: If your AR experience uses a rendering technology other than SceneKit, you’ll need to retrieve the generated textures yourself and determine how to use them appropriately in your shading engine.</span> <span class="ko-segment" data-segment-id="seg:blockquote:render-virtual-objects-with-reflection:0021:0002">First, implement the <a href="arsessiondelegate/session(_:didupdate:">@@TOKEN_0@@</a>-9v2kw.md) delegate method to be notified when ARKit generates environment probe textures.</span> <span class="ko-segment" data-segment-id="seg:blockquote:render-virtual-objects-with-reflection:0021:0003">In that method, use the <a href="arenvironmentprobeanchor/environmenttexture.md">@@TOKEN_0@@</a> property of each <a href="arenvironmentprobeanchor.md">@@TOKEN_1@@</a> object to get the texture.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:place-environment-probes-manually-for-enhanced-results:0022:0001">Place Environment Probes Manually for Enhanced Results</span>

<span class="ko-segment" data-segment-id="seg:paragraph:place-environment-probes-manually-for-enhanced-results:0023:0001">Automatic environment texturing is all you need for basic environmental lighting or reflection effects.</span> <span class="ko-segment" data-segment-id="seg:paragraph:place-environment-probes-manually-for-enhanced-results:0023:0002">To render reflections more realistically, however, each reflective object needs an environment probe texture that accurately captures the area close to that object.</span> <span class="ko-segment" data-segment-id="seg:paragraph:place-environment-probes-manually-for-enhanced-results:0023:0003">For example, in the images above, the virtual sphere reflects the real cup when the cup is close to the sphere’s real-world position.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:place-environment-probes-manually-for-enhanced-results:0024:0001">To more precisely define environment probes, choose <a href="arworldtrackingconfiguration/environmenttexturing-swift.enum/manual.md">@@TOKEN_0@@</a> environment texturing when you configure your AR session, then create your own <a href="arenvironmentprobeanchor.md">@@TOKEN_1@@</a> instance for each virtual object you want to use environmental lighting with.</span> <span class="ko-segment" data-segment-id="seg:paragraph:place-environment-probes-manually-for-enhanced-results:0024:0002">각 probe의 <a href="arenvironmentprobeanchor/extent.md">@@TOKEN_0@@</a>와 위치를 초기화합니다. 해당 가상 객체 크기를 기준으로 <a href="aranchor/transform.md">@@TOKEN_1@@</a>을(를) 사용합니다.</span>

```swift
// Make sure the probe encompasses the object and provides some surrounding area to appear in reflections.
var extent = object.extents * object.simdScale
extent.x *= 3 // Reflect an area 3x the width of the object.
extent.z *= 3 // Reflect an area 3x the depth of the object.

// Also include some vertical area around the object, but keep the bottom of the probe at the
// bottom of the object so that it captures the real-world surface underneath.
let verticalOffset = SIMD3<Float>(0, extent.y, 0)
let transform = float4x4(translation: object.simdPosition + verticalOffset)
extent.y *= 2

// Create the new environment probe anchor and add it to the session.
let probeAnchor = AREnvironmentProbeAnchor(transform: transform, extent: extent)
sceneView.session.add(anchor: probeAnchor)
```

<span class="ko-segment" data-segment-id="seg:paragraph:place-environment-probes-manually-for-enhanced-results:0026:0001">이 코드는 각 가상 객체 주변의 영역을 최적으로 캡처하기 위해 아래 규칙을 적용합니다:</span>

- <span class="ko-segment" data-segment-id="seg:list:place-environment-probes-manually-for-enhanced-results:0027:0001">probe의 위치는 가상 객체의 상단 중앙이어야 하며, <code>y</code> 성분은 객체 높이의 두 배여야 합니다. 이렇게 하면 probe extent의 하단이 가상 객체 하단과 맞춰져 객체가 놓인 실제 표면을 정확히 캡처합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:place-environment-probes-manually-for-enhanced-results:0027:0002">probe의 <code>x</code> 및 <code>z</code> 성분은 객체의 너비와 깊이의 세 배여야 하며, 이를 통해 probe가 객체 아래쪽과 주변 영역을 캡처합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:place-environment-probes-manually-for-enhanced-results:0028:0001">!<a href="https://docs-assets.developer.apple.com/published/d993b9291118ec512ef9d4c4f322a542/ProbeExtent.png">가상 객체 주변의 환경 probe anchor를 위한 권장 extent를 나타내는 다이어그램: 객체 높이의 두 배, 너비와 깊이의 세 배, 객체 상단 중앙 정렬</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:use-environment-texturing-wisely:0029:0001">환경 텍스처링을 신중하게 사용</span>

<span class="ko-segment" data-segment-id="seg:paragraph:use-environment-texturing-wisely:0030:0001">앱의 환경 텍스처링 사용을 현실감 있게 그리고 효율적으로 유지하려면 다음 팁을 따릅니다:</span>

<span class="ko-segment" data-segment-id="seg:paragraph:use-environment-texturing-wisely:0031:0001">**거울 마감 표면처럼 정확한 반사를 요구하는 가상 콘텐츠는 피합니다.**</span>

<span class="ko-segment" data-segment-id="seg:paragraph:use-environment-texturing-wisely:0032:0001">일반적으로 AR 경험은 현실을 완전히 모방할 수 있는 모든 정보를 갖추지 못합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:use-environment-texturing-wisely:0032:0002">좋은 AR 경험은 현실감의 한계를 가리는 방식으로 콘텐츠를 신중히 설계해 가상 객체가 사용자의 현실 환경에 존재한다는 인상을 유지합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:use-environment-texturing-wisely:0033:0001">ARKit 환경 텍스처는 사용자를 둘러싼 모든 방향의 환경을 촬영하지 않으며 실시간으로 갱신되지 않으므로, 일부 유형의 콘텐츠는 AR에서 적합하지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:use-environment-texturing-wisely:0033:0002">예를 들어, 가상 거울을 만나는 사용자는 자신의 반영이 나타나길 기대할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:use-environment-texturing-wisely:0033:0003">완전 반사 표면은 작거나 세부 정보가 많은 부분에서만 사용하고, 넓은 평면 표면에서는 반사도를 낮게 사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:use-environment-texturing-wisely:0034:0001">**이동하는 객체를 처리합니다.**</span>

<span class="ko-segment" data-segment-id="seg:paragraph:use-environment-texturing-wisely:0035:0001">현실적인 반사를 렌더링하려면 해당 가상 객체 주변의 작은 영역을 캡처하는 환경 probe가 필요합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:use-environment-texturing-wisely:0035:0002">객체 위치가 변경되면 해당 환경 probe도 변경되어 객체의 새 주변 환경이 반영되어야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:use-environment-texturing-wisely:0035:0003">프로브를 수동으로 배치할 때는 이동하는 객체를 처리하기 위해 다음 전략 중 하나 이상을 고려합니다:</span>

- <span class="ko-segment" data-segment-id="seg:list:use-environment-texturing-wisely:0036:0001">객체의 이동 경로가 사전에 알려진 경우 여러 환경 probe anchor를 생성해 해당 경로를 따라 배치합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:use-environment-texturing-wisely:0036:0002">주변 probe의 extent 범위를 벗어난 위치로 이동한 객체를 렌더링할 때 대체 사용할 수 있도록 매우 큰 extent의 글로벌 환경 probe를 생성합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:use-environment-texturing-wisely:0036:0003">객체가 이동한 뒤에는 새 위치 주변을 캡처하는 새 probe를 생성하고 이전 위치와 연결된 환경 probe를 제거합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:use-environment-texturing-wisely:0037:0001"><a href="arscnview.md">@@TOKEN_0@@</a>로 AR 콘텐츠를 표시할 때 SceneKit은 여러 환경 probe의 extent가 겹치는 객체의 경우 자동으로 환경 텍스처를 보간합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:use-environment-texturing-wisely:0038:0001">**환경 텍스처를 너무 자주 생성하지 않습니다.**</span>

<span class="ko-segment" data-segment-id="seg:paragraph:use-environment-texturing-wisely:0039:0001">ARKit는 카메라 이미지를 수집하는 데 시간이 걸리며, 그 이미지를 결합하고 외삽해 환경 텍스처를 만들려면 계산 자원이 필요합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:use-environment-texturing-wisely:0039:0002">새 <a href="arenvironmentprobeanchor.md">@@TOKEN_0@@</a> 인스턴스를 AR 세션에 자주 추가해도 표시 장면의 변화가 뚜렷하지 않을 수 있지만, 배터리 전력을 소모하고 AR 경험의 다른 요소에서 사용할 수 있는 성능 오버헤드를 줄입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:use-environment-texturing-wisely:0040:0001">이 앱은 사용자가 가상 객체를 이동하거나 크기를 조정할 때마다 새 환경 probe를 생성하지만, 이러한 업데이트는 초당 1회보다 자주 발생하지 않도록 제한합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:use-environment-texturing-wisely:0040:0002">(샘플 <code>updateEnvironmentProbe(atTime:)</code> 함수를 참조합니다.)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:use-environment-texturing-wisely:0041:0001">**서로 다른 환경 텍스처 간의 급격한 전환을 피합니다.**</span>

<span class="ko-segment" data-segment-id="seg:paragraph:use-environment-texturing-wisely:0042:0001"><a href="arscnview.md">@@TOKEN_0@@</a>에서 환경 텍스처가 변경되면(객체 이동 또는 해당 위치에 새 텍스처가 사용 가능해진 경우), SceneKit은 짧은 페이드 인 애니메이션을 사용해 새 결과로 자동 전환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:use-environment-texturing-wisely:0042:0002">전환 전후에 사용되는 환경 텍스처의 내용에 따라 이 변경이 사용자에게 거칠게 느껴질 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:use-environment-texturing-wisely:0043:0001">현실감 없는 전환을 피하기 위해 이 샘플 앱은 첫 번째 환경 텍스처가 사용 가능해질 때까지 사용자가 가상 콘텐츠를 배치하도록 허용하지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:use-environment-texturing-wisely:0043:0002">자동 모드에서는 세션 시작 즉시 ARKit가 넓은 영역을 덮는 fallback 환경 텍스처 생성을 자동으로 시작합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:use-environment-texturing-wisely:0043:0003">(샘플 <code>updateSceneEnvironmentProbe(for:)</code> 함수를 참조합니다.) 이 환경 텍스처가 사용 가능해질 때까지 기다리면 가상 객체가 항상 세션에 적합한 환경을 반영합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:use-environment-texturing-wisely:0043:0004">(See the sample <code>updateSceneEnvironmentProbe(for:)</code> function.) Waiting until this environment texture is available ensures that virtual objects always reflect an environment appropriate to the session.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:use-environment-texturing-wisely:0044:0001">환경 텍스처링을 사용할 수 없을 때(예: 이전 iOS 버전 지원을 위해) 대체용으로 정적 환경 맵 텍스처를 앱에 포함할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:use-environment-texturing-wisely:0044:0002">이 경우 다양한 상황에서 사실적으로 보이는 텍스처를 설계하거나 선택합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0045:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0046:0001"><a href="arenvironmentprobeanchor.md">class AREnvironmentProbeAnchor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">세계 추적 AR 세션의 특정 공간 영역에 대한 환경 조명 정보를 제공하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0048:0001"><a href="arlightestimate.md">class ARLightEstimate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0049:0001">AR 세션에서 캡처된 비디오 프레임과 연결된 장면 조명 추정 정보입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0050:0001"><a href="ardirectionallightestimate.md">class ARDirectionalLightEstimate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0051:0001">얼굴 추적 AR 세션에서 캡처된 비디오 프레임과 연결된 환경 조명 추정 정보입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0053:0001">*<a href="https://developer.apple.com/documentation/arkit/adding-realistic-reflections-to-an-ar-experience">View on Apple Developer</a>*</span>
