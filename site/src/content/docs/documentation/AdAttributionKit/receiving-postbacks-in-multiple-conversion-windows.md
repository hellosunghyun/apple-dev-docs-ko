---
source_path: "documentation/AdAttributionKit/receiving-postbacks-in-multiple-conversion-windows.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/adattributionkit/receiving-postbacks-in-multiple-conversion-windows"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:receiving-postbacks-in-multiple-conversion-windows:0000:0001">여러 변환 창에서 postback 수신</span>

<span class="ko-segment" data-segment-id="seg:paragraph:receiving-postbacks-in-multiple-conversion-windows:0001:0001">**Framework**: AdAttributionKit</span>

<span class="ko-segment" data-segment-id="seg:paragraph:receiving-postbacks-in-multiple-conversion-windows:0002:0001">각 변환 창에서 postback에 포함될 수 있는 데이터에 대해 알아봅니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0003:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0001">AdAttributionKit은 승리한 광고 어트리뷰션의 경우 최대 세 개의 postback을 생성할 수 있는 세 개의 변환 창을 지원합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0002">변환 창은 사용자가 앱을 처음 실행할 때 시작됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0003">첫 번째 변환 창은 0일에서 2일까지, 두 번째 창은 3일에서 7일까지, 세 번째 창은 8일에서 35일까지입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0004">앱은 세 개의 시간 창 모두에서 변환 값을 업데이트할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0005:0001">여러 postback을 받으려면, 광고되는 앱에서 각 변환 창 동안 변환 값을 업데이트하기 위해 <a href="postback/updateconversionvalue(_:coarseconversionvalue:lockpostback:">@@TOKEN_0@@</a>.md) 또는 <a href="postback/updateconversionvalue(_:lockpostback:">@@TOKEN_1@@</a>.md) 메서드를 호출해야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0001">다음의 경우 단일 postback을 받을 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:overview:0007:0001">앱의 postback 데이터 티어가 Tier 0이면 시스템은 첫 번째 postback만 전송합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0007:0002">승리하지 못한 광고 어트리뷰션은 하나의 postback만 수신합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:lock-conversion-values-to-receive-postbacks-sooner:0008:0001">postback을 더 빨리 받기 위해 변환 값 잠그기</span>

<span class="ko-segment" data-segment-id="seg:paragraph:lock-conversion-values-to-receive-postbacks-sooner:0009:0001">기본적으로 시스템은 최종 변환 값을 얻기 위해 변환 창이 끝날 때까지 대기합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:lock-conversion-values-to-receive-postbacks-sooner:0009:0002">앱은 변환 창이 끝날 때까지 변환 값을 계속 업데이트할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:lock-conversion-values-to-receive-postbacks-sooner:0009:0003">변환 창이 끝나면 시스템이 postback을 준비해 무작위 지연 후 전송합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:lock-conversion-values-to-receive-postbacks-sooner:0010:0001">![첫 번째 변환 창은 0~2일, 두 번째 창은 3~7일, 세 번째 창은 8~35일임을 보여주는 타임라인.</span> <span class="ko-segment" data-segment-id="seg:paragraph:lock-conversion-values-to-receive-postbacks-sooner:0010:0002">첫 번째 변환 창이 끝나면 시스템이 24~48시간 후 postback을 전송합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:lock-conversion-values-to-receive-postbacks-sooner:0010:0003">두 번째 변환 창이 끝나면 시스템은 24~144시간 후 postback을 전송합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:lock-conversion-values-to-receive-postbacks-sooner:0010:0004">세 번째 변환 창이 끝나면 시스템은 24~144시간 후 postback을 전송합니다.](https://docs-assets.developer.apple.com/published/f57857d70ff75c6b52c0446cc26620d9/receiving-postbacks-in-multiple-conversion-windows-figure1%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:lock-conversion-values-to-receive-postbacks-sooner:0011:0001">첫 번째 postback의 무작위 지연은 24~48시간이고, 두 번째 및 세 번째 postback의 무작위 지연은 24~144시간입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:lock-conversion-values-to-receive-postbacks-sooner:0012:0001"><a href="postback/updateconversionvalue(_:coarseconversionvalue:lockpostback:">@@TOKEN_0@@</a>.md) 메서드는 변환 창이 끝나기 전에 전환 값을 잠그고 확정할 수 있는 옵션을 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:lock-conversion-values-to-receive-postbacks-sooner:0012:0002">변환 값 잠금은 한 개 또는 모든 변환 창에서 선택할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:lock-conversion-values-to-receive-postbacks-sooner:0012:0003">다음은 두 번째 변환 창에서 전환 값을 잠그는 앱을 보여줍니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:lock-conversion-values-to-receive-postbacks-sooner:0013:0001">![첫 번째 변환 창은 0~2일이고 시스템이 24~48시간 뒤에 postback을 전송하는 타임라인.</span> <span class="ko-segment" data-segment-id="seg:paragraph:lock-conversion-values-to-receive-postbacks-sooner:0013:0002">두 번째 변환 창은 3~7일이지만 앱이 창이 끝나기 전에 업데이트를 잠그면, 시스템이 잠금 후 24~144시간 뒤에 postback을 전송합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:lock-conversion-values-to-receive-postbacks-sooner:0013:0003">두 번째 변환 창의 나머지 기간 동안에는 추가로 변환 값을 업데이트할 수 없습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:lock-conversion-values-to-receive-postbacks-sooner:0013:0004">세 번째 창은 8~35일이며, 시스템은 8일차부터 변환 값 업데이트를 허용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:lock-conversion-values-to-receive-postbacks-sooner:0013:0005">세 번째 변환 창이 끝나면 시스템은 24~144시간 뒤에 postback을 전송합니다.](https://docs-assets.developer.apple.com/published/7cb786d26747d27c0a25adf9476451ff/receiving-postbacks-in-multiple-conversion-windows-figure2%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:lock-conversion-values-to-receive-postbacks-sooner:0014:0001">잠긴 전환 값을 수신하면 시스템이 즉시 postback을 준비하고 동일한 변환 창에서 추가 업데이트를 모두 무시합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:lock-conversion-values-to-receive-postbacks-sooner:0014:0002">시스템은 잠긴 변환 값 이후 동일한 무작위 지연으로 postback을 전송합니다. 첫 번째 postback은 24~48시간 지연, 두 번째와 세 번째 postback은 24~144시간 지연입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:lock-conversion-values-to-receive-postbacks-sooner:0014:0003">시스템은 같은 변환 창에서 남은 시간 동안 변환 값의 추가 업데이트를 무시합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:receive-the-highest-data-level-to-help-ensure-crowd-anonymity:0015:0001">군집 익명성 보장을 위해 가장 높은 데이터 레벨 수신</span>

<span class="ko-segment" data-segment-id="seg:paragraph:receive-the-highest-data-level-to-help-ensure-crowd-anonymity:0016:0001">사용자의 개인정보 보호를 유지하고 crowd 익명성을 보장하기 위해, 기기는 postback에서 전송되는 데이터를 제한할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:receive-the-highest-data-level-to-help-ensure-crowd-anonymity:0016:0002">Apple은 각 앱 다운로드에 대해 postback 데이터 티어를 결정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:receive-the-highest-data-level-to-help-ensure-crowd-anonymity:0016:0003">다음은 티어와 상대적 군집 크기 사이의 가상 관계를 나타냅니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:receive-the-highest-data-level-to-help-ensure-crowd-anonymity:0017:0001">![Tier 0, Tier 1, Tier 2, Tier 3으로 라벨된 6×8 그리드 네 개의 다이어그램.</span> <span class="ko-segment" data-segment-id="seg:paragraph:receive-the-highest-data-level-to-help-ensure-crowd-anonymity:0017:0002">각 그리드에는 앱을 나타내는 별 하나와 군중을 나타내는 파란색 원이 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:receive-the-highest-data-level-to-help-ensure-crowd-anonymity:0017:0003">Tier 0에는 여섯 개의 원이 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:receive-the-highest-data-level-to-help-ensure-crowd-anonymity:0017:0004">Tier 1에는 16개의 원이 있어 더 큰 군중을 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:receive-the-highest-data-level-to-help-ensure-crowd-anonymity:0017:0005">Tier 2에는 Tier 1보다 원이 더 많습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:receive-the-highest-data-level-to-help-ensure-crowd-anonymity:0017:0006">Tier 3에는 전체 그리드를 가득 채우는 원이 있어 가장 큰 군중을 나타냅니다.](https://docs-assets.developer.apple.com/published/250c512a7dfa6fa2c59c382689fac550/receiving-postbacks-in-multiple-conversion-windows-figure3%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:receive-the-highest-data-level-to-help-ensure-crowd-anonymity:0018:0001">postback 데이터 티어는 광고를 표시하는 앱 또는 도메인, 광고 대상 앱, 광고 대상 앱이 설치된 국가, 그리고 광고 네트워크가 제공하는 계층형 소스 식별자를 고려합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:receive-the-highest-data-level-to-help-ensure-crowd-anonymity:0018:0002">시스템은 두 자리, 세 자리 및 네 자리 계층형 소스 식별자의 postback 데이터 티어를 계산합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:receive-the-highest-data-level-to-help-ensure-crowd-anonymity:0018:0003">시스템은 가장 높은 postback 데이터 티어를 가진 소스 식별자를 선택합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:receive-the-highest-data-level-to-help-ensure-crowd-anonymity:0018:0004">가장 높은 postback 데이터 티어를 공유하는 소스 식별자가 여러 개인 경우, 시스템은 자릿수가 가장 많은 소스 식별자를 선택합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:receive-the-highest-data-level-to-help-ensure-crowd-anonymity:0018:0005">가장 높은 postback 데이터 티어가 Tier 1 또는 Tier 0인 경우, 시스템은 항상 두 자리 소스 식별자를 선택합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:receive-the-highest-data-level-to-help-ensure-crowd-anonymity:0019:0001">postback 데이터 티어는 postback의 다음 필드에 영향을 주므로, 해당 필드는 존재하지 않거나 자릿수가 제한되어 포함될 수 있습니다:</span>

- <span class="ko-segment" data-segment-id="seg:list:receive-the-highest-data-level-to-help-ensure-crowd-anonymity:0020:0001"><code>source-identifier</code>, 두 자리, 세 자리 또는 네 자리일 수 있는 계층형 소스 식별자입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:receive-the-highest-data-level-to-help-ensure-crowd-anonymity:0020:0002"><code>conversion-value</code>, 첫 번째 postback에서만 제공되는 정교한 conversion value입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:receive-the-highest-data-level-to-help-ensure-crowd-anonymity:0020:0003"><code>coarse-conversion-value</code>, 하위 postback 데이터 티어 및 두 번째와 세 번째 postback에서 conversion value 대신 전송하는 거친 conversion value입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:receive-the-highest-data-level-to-help-ensure-crowd-anonymity:0020:0004"><code>publisher-item-identifier</code>, 게시자 앱의 앱 항목 식별자입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:receive-the-highest-data-level-to-help-ensure-crowd-anonymity:0020:0005"><code>marketplace-identifier</code>, 전환이 발생한 대체 마켓플레이스의 bundle id입니다. 프레임워크는 Tier 0 postback에서 이 속성을 생략합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:receive-the-highest-data-level-to-help-ensure-crowd-anonymity:0020:0006"><code>country-code</code>, 앱이 설치된 국가를 나타내는 선택적 필드입니다. 특정 국가의 군중 크기가 Tier 3인 경우 시스템은 이 필드를 추가합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:receive-the-highest-data-level-to-help-ensure-crowd-anonymity:0021:0001">나머지 postback 데이터 필드는 postback 데이터 티어의 영향을 받지 않으며, postback의 AdAttributionKit 버전에 따라 모든 postback에 표시됩니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:receive-the-first-postback:0022:0001">첫 번째 Postback 수신</span>

<span class="ko-segment" data-segment-id="seg:paragraph:receive-the-first-postback:0023:0001">첫 번째 전환 창은 사용자가 앱을 처음 실행한 후 2일 뒤에 종료됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:receive-the-first-postback:0023:0002">잠금을 사용하지 않으면 시스템은 전환 창이 종료된 후 postback을 준비합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:receive-the-first-postback:0023:0003">postback lock을 사용하는 경우, 앱이 lock이 활성화된 상태로 <a href="postback/updateconversionvalue(_:coarseconversionvalue:lockpostback:">@@TOKEN_0@@</a>.md)를 호출하면 시스템은 첫 번째 postback을 준비합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:receive-the-first-postback:0023:0004">그다음 시스템은 무작위로 24~48시간 지연 후 postback을 전송합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:receive-the-first-postback:0024:0001">postback 데이터 티어는 첫 번째 postback에서 수신하는 데이터를 다음과 같이 결정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:receive-the-first-postback:0025:0001">Tier 3 광고의 첫 번째 postback에는 다음이 포함됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:receive-the-first-postback:0026:0001"><code>source-identifier</code>, 두 자리, 세 자리 또는 네 자리의 계층형 소스 식별자입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:receive-the-first-postback:0026:0002"><code>conversion-value</code>, 앱이 제공하는 경우 정밀한 conversion value입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:receive-the-first-postback:0026:0003"><code>publisher-item-identifier</code>, 앱에서 표시되는 광고의 식별자입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:receive-the-first-postback:0026:0004"><code>country-code</code>, 앱이 설치된 국가를 나타내는 선택적 필드입니다. 특정 국가의 군중 크기가 Tier 3인 경우 시스템은 이 필드를 추가합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:receive-the-first-postback:0027:0001">Tier 2 광고의 첫 번째 postback에는 다음이 포함됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:receive-the-first-postback:0028:0001"><code>source-identifier</code>, 두 자리, 세 자리 또는 네 자리의 계층형 소스 식별자입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:receive-the-first-postback:0028:0002"><code>conversion-value</code>, 앱이 제공하는 경우 정밀한 conversion value입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:receive-the-first-postback:0029:0001">Tier 1 광고의 첫 번째 postback에는 다음이 포함됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:receive-the-first-postback:0030:0001"><code>source-identifier</code>, 두 자리의 계층형 소스 식별자입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:receive-the-first-postback:0030:0002"><code>coarse-conversion-value</code>, 앱이 제공하는 경우 조정된 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:receive-the-first-postback:0031:0001">Tier 0 광고의 첫 번째 postback에는 두 자리인 계층형 소스 식별자인 <code>source-identifier</code>가 포함됩니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:receive-the-second-and-third-postbacks:0032:0001">두 번째 및 세 번째 Postback 수신</span>

<span class="ko-segment" data-segment-id="seg:paragraph:receive-the-second-and-third-postbacks:0033:0001">두 번째 전환 창은 사용자가 앱을 처음 실행한 후 7일 뒤에 종료되고, 세 번째 전환 창은 35일 후에 종료됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:receive-the-second-and-third-postbacks:0033:0002">시스템은 전환 창 종료 후 두 번째 및 세 번째 postback을 준비한 뒤 무작위 24~144시간 지연 후 전송합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:receive-the-second-and-third-postbacks:0034:0001">두 번째 또는 세 번째 conversion value 업데이트에서 lock을 사용하는 경우, 앱이 lock을 활성화한 상태로 <a href="postback/updateconversionvalue(_:coarseconversionvalue:lockpostback:">@@TOKEN_0@@</a>.md)를 호출하면 시스템은 postback을 준비합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:receive-the-second-and-third-postbacks:0034:0002">시스템은 무작위로 24~144시간 지연 후 postback을 전송합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:receive-the-second-and-third-postbacks:0035:0001">postback 데이터 티어는 postback에서 수신하는 데이터를 다음과 같이 결정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:receive-the-second-and-third-postbacks:0036:0001">Tier 1, Tier 2, Tier 3 광고의 두 번째 및 세 번째 postback에는 다음이 포함됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:receive-the-second-and-third-postbacks:0037:0001">source-identifier, 두 자리의 계층형 소스 식별자</span>
- <span class="ko-segment" data-segment-id="seg:list:receive-the-second-and-third-postbacks:0037:0002">coarse-conversion-value, 앱이 제공하는 경우 조정된 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:receive-the-second-and-third-postbacks:0038:0001">Tier 0 광고는 시스템이 두 번째 또는 세 번째 postback을 전송하지 않습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:receive-the-second-and-third-postbacks:0040:0001">*<a href="https://developer.apple.com/documentation/adattributionkit/receiving-postbacks-in-multiple-conversion-windows">View on Apple Developer</a>*</span>
